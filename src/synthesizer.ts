import * as path from "path";
import { IConstruct, MetadataEntry, ConstructOrder } from "constructs";
import * as fs from "fs-extra";

import { Annotations, AnnotationMetadataEntryType } from "./annotations";
import { Aspects, IAspect } from "./aspect";
import { Manifest, ModelAnnotation } from "./manifest";
import { Model } from "./model";
import { Yaml } from "./private/yaml";

export interface ISynthesisSession {
  /**
   * The output directory for this synthesis session.
   */
  readonly outdir: string;

  readonly skipValidation?: boolean;

  readonly manifest: Manifest;
}

export interface IModelSynthesizer {
  /**
   * Synthesize the associated model to the session
   */
  synthesize(session: ISynthesisSession): void;

  addFileAsset(filePath: string): void;
}

export class ModelSynthesizer implements IModelSynthesizer {
  private fileAssets: string[];

  constructor(
    protected model: Model,
    private continueOnErrorAnnotations = false
  ) {
    this.fileAssets = new Array<string>();
  }

  public addFileAsset(filePath: string) {
    this.fileAssets.push(filePath);
  }

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

      // call custom synthesis on child nodes (leafs first)
      this.model.node
        .findAll(ConstructOrder.POSTORDER)
        .forEach((node) => getCustomSynthesis(node)?.onSynthesize(session));

      // copy file assets
      this.fileAssets.forEach((asset) => {
        const targetPath = path.join(workingDirectory, path.basename(asset));
        fs.copyFileSync(asset, targetPath);
      });

      // collect annotations into manifest
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
        .reduce((list, metadatas) => [...list, ...metadatas], []);

      modelManifest.annotations.push(...annotations);

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

//  originally from https://github.com/aws/aws-cdk/blob/9cee4d00539bed61872126a07bdc14aedba041d8/packages/%40aws-cdk/core/lib/private/synthesis.ts#L44
const CUSTOM_SYNTHESIS_SYM = Symbol.for("cdktg/customSynthesis");

/**
 * Interface for constructs that want to do something custom during synthesis
 *
 * This feature is intended for use by cdktg only; 3rd party
 * library authors and CDK users should not use this function.
 */
export interface ICustomSynthesis {
  /**
   * Called when the construct is synthesized
   */
  onSynthesize(session: ISynthesisSession): void;
}

export function addCustomSynthesis(
  construct: IConstruct,
  synthesis: ICustomSynthesis
): void {
  Object.defineProperty(construct, CUSTOM_SYNTHESIS_SYM, {
    value: synthesis,
    enumerable: false,
  });
}

function getCustomSynthesis(
  construct: IConstruct
): ICustomSynthesis | undefined {
  return (construct as any)[CUSTOM_SYNTHESIS_SYM];
}
