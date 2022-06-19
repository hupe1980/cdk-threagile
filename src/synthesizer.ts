import * as path from "path";
import { IConstruct, MetadataEntry } from "constructs";
import * as fs from "fs-extra";

import { Annotations, AnnotationMetadataEntryType } from "./annotations";
import { Aspects, IAspect } from "./aspect";
import { Manifest, ModelAnnotation } from "./manifest";
import { Model } from "./model";
import { Yaml } from "./yaml";

export interface ISynthesisSession {
  /**
   * The output directory for this synthesis session.
   */
  readonly outdir: string;

  readonly skipValidation?: boolean;

  readonly manifest: Manifest;

  /**
   * Additional context passed to synthesizeNode through `sessionContext`.
   */
  [key: string]: any;
}

export interface IModelSynthesizer {
  /**
   * Synthesize the associated model to the session
   */
  synthesize(session: ISynthesisSession): void;
}

export class ModelSynthesizer implements IModelSynthesizer {
  constructor(
    protected model: Model,
    private continueOnErrorAnnotations = false
  ) {}

  synthesize(session: ISynthesisSession) {
    invokeAspects(this.model);

    if (!session.skipValidation) {
      const errors: { message: string; source: IConstruct }[] = this.model.node
        .findAll()
        .map((node) =>
          node.node
            .validate()
            .map((error) => ({ message: error, source: node }))
        )
        .reduce((prev, curr) => [...prev, ...curr], []);

      if (errors.length > 0) {
        const errorList = errors
          .map((e) => `[${e.source.node.path}] ${e.message}`)
          .join("\n  ");
        throw new Error(
          `Validation failed with the following errors:\n  ${errorList}`
        );
      }

      const manifest = session.manifest;
      const modelManifest = manifest.forModel(this.model);

      const workingDirectory = path.join(
        session.outdir,
        modelManifest.workingDirectory
      );

      if (!fs.existsSync(workingDirectory)) fs.mkdirSync(workingDirectory);

      // collect Annotations into Manifest
      const annotations = this.model.node
        .findAll()
        .map((node) => ({
          node,
          metadatas: node.node.metadata.filter(isAnnotationMetadata),
        }))
        .map<ModelAnnotation[]>(({ node, metadatas }) =>
          metadatas.map((metadata) => ({
            constructPath: node.node.path,
            level: metadata.type as AnnotationMetadataEntryType,
            message: metadata.data,
            stacktrace: metadata.trace,
          }))
        )
        .reduce((list, metadatas) => [...list, ...metadatas], []); // Array.flat()

      // it is readonly but this is the place where we are allowed to write to it
      (modelManifest.annotations as any) = annotations;

      // abort if one or more error annotations have been encountered
      if (
        !this.continueOnErrorAnnotations &&
        annotations.some(isErrorAnnotation)
      ) {
        throw new Error(
          `Encountered Annotations with level "ERROR":\n${annotations
            .filter(isErrorAnnotation)
            .map((a) => `[${a.constructPath}] ${a.message}`)
            .join("\n")}`
        );
      }

      const threagile = this.model._toThreagile();

      Yaml.save(path.join(session.outdir, modelManifest.synthesizedModelPath), [
        threagile,
      ]);
    }
  }
}

const invokedByPath: { [nodePath: string]: IAspect[] } = {};

/**
 * Invoke aspects on the given construct tree.
 *
 * originally from https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/private/synthesis.ts#L99-L137
 */
export function invokeAspects(root: IConstruct) {
  let nestedAspectWarning = false;
  recurse(root, []);

  function recurse(construct: IConstruct, inheritedAspects: IAspect[]) {
    const node = construct.node;
    const aspects = Aspects.of(construct);
    const allAspectsHere = [...(inheritedAspects ?? []), ...aspects.all];
    const nodeAspectsCount = aspects.all.length;

    for (const aspect of allAspectsHere) {
      let invoked = invokedByPath[node.path];
      if (!invoked) {
        invoked = invokedByPath[node.path] = [];
      }

      if (invoked.includes(aspect)) {
        continue;
      }

      aspect.visit(construct);

      // if an aspect was added to the node while invoking another aspect it will not be invoked, emit a warning
      // the `nestedAspectWarning` flag is used to prevent the warning from being emitted for every child
      if (!nestedAspectWarning && nodeAspectsCount !== aspects.all.length) {
        Annotations.of(construct).addWarning(
          "We detected an Aspect was added via another Aspect, and will not be applied"
        );
        nestedAspectWarning = true;
      }

      // mark as invoked for this node
      invoked.push(aspect);
    }

    for (const child of construct.node.children) {
      recurse(child, allAspectsHere);
    }
  }
}

const annotationMetadataEntryTypes = [
  AnnotationMetadataEntryType.INFO,
  AnnotationMetadataEntryType.WARN,
  AnnotationMetadataEntryType.ERROR,
] as string[];

function isAnnotationMetadata(metadata: MetadataEntry): boolean {
  return annotationMetadataEntryTypes.includes(metadata.type);
}

function isErrorAnnotation(annotation: ModelAnnotation): boolean {
  return annotation.level === AnnotationMetadataEntryType.ERROR;
}
