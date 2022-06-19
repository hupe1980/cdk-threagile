import * as path from "path";
import * as fs from "fs-extra";

import { AnnotationMetadataEntryType } from "./annotations";
import { Model } from "./model";

export interface ModelAnnotation {
  readonly constructPath: string;
  readonly level: AnnotationMetadataEntryType;
  readonly message: string;
  readonly stacktrace?: string[];
}

export interface ModelManifest {
  readonly name: string;
  readonly sanitizedName: string;
  readonly constructPath: string;
  readonly synthesizedModelPath: string;
  readonly workingDirectory: string;
  readonly annotations: ModelAnnotation[];
}

export interface IManifest {
  readonly models: Record<ModelManifest["name"], ModelManifest>;
  readonly version: string;
}

export class Manifest implements IManifest {
  public static readonly fileName = "manifest.json";
  public static readonly modelsFolder = "models";

  public static fromPath(dir: string): Manifest {
    const { version, models } = fs.readJSONSync(
      path.join(dir, Manifest.fileName)
    ) as IManifest;

    const manifest = new Manifest(version, dir);

    Object.keys(models).forEach((k) => {
      manifest.models[k] = models[k];
    });

    return manifest;
  }

  public readonly models: Record<ModelManifest["name"], ModelManifest> = {};

  constructor(public readonly version: string, public readonly outdir: string) {
    const modelsPath = path.join(this.outdir, Manifest.modelsFolder);
    if (!fs.existsSync(modelsPath)) fs.mkdirSync(modelsPath);
  }

  public forModel(model: Model): ModelManifest {
    const node = model.node;
    const name = node.id;

    if (this.models[name]) {
      return this.models[name];
    }

    const sanitizedName = `${`${name}`.replace(/[^0-9a-zA-Z-_.]/g, "")}`;

    const manifest: ModelManifest = {
      name,
      sanitizedName,
      constructPath: node.path,
      workingDirectory: path.join(Manifest.modelsFolder),
      synthesizedModelPath: path.join(
        Manifest.modelsFolder,
        `${sanitizedName}.yml`
      ),
      annotations: [], // will be replaced later when processed in App
    };
    this.models[name] = manifest;

    return manifest;
  }

  public buildManifest(): IManifest {
    return {
      version: this.version,
      models: this.models,
    };
  }

  public writeToFile() {
    fs.writeJSONSync(
      path.join(this.outdir, Manifest.fileName),
      this.buildManifest(),
      {
        spaces: 4,
      }
    );
  }
}
