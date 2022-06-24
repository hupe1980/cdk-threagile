import { Construct } from "constructs";
import * as fs from "fs-extra";

import { CDKTG_OUT_DIR, CDKTG_VERSION } from "./common";
import { Manifest } from "./manifest";
import { Model } from "./model";
import { ISynthesisSession } from "./synthesizer";

export interface ProjectProps {
  /**
   * The directory to output the threadgile model.
   *
   * @default - .
   */
  readonly outdir?: string;

  /**
   * Whether to skip the validation during synthesis of the project
   *
   * @default - false
   */
  readonly skipValidation?: boolean;
}

export class Project extends Construct {
  /**
   * The output directory into which models will be synthesized.
   */
  public readonly outdir: string;

  /**
   * Whether to skip the validation during synthesis of the app
   */
  public readonly skipValidation?: boolean;

  public readonly manifest: Manifest;

  constructor(props: ProjectProps = {}) {
    super(undefined as any, "");

    this.outdir = props.outdir ?? CDKTG_OUT_DIR;
    this.skipValidation = props.skipValidation;

    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir, { recursive: true });
    }

    this.manifest = new Manifest(CDKTG_VERSION, this.outdir);
  }

  /**
   * Synthesizes the model to the output directory
   */
  public synth(): void {
    const session: ISynthesisSession = {
      outdir: this.outdir,
      skipValidation: this.skipValidation,
      manifest: this.manifest,
    };

    const models = this.node
      .findAll()
      .filter<Model>((c): c is Model => c instanceof Model);

    models.forEach((model) => model.synthesizer.synthesize(session));

    this.manifest.writeToFile();
  }
}
