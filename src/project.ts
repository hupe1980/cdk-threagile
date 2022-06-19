import * as path from "path";
import { Construct } from "constructs";
import * as fs from "fs-extra";

import { Manifest } from "./manifest";
import { Model } from "./model";
import { Yaml } from "./yaml";

export interface ProjectProps {
  /**
   * The directory to output the threadgile model.
   *
   * @default - .
   */
  readonly outdir?: string;
}

export class Project extends Construct {
  /**
   * The output directory into which models will be synthesized.
   */
  public readonly outdir: string;

  constructor(props: ProjectProps = {}) {
    super(undefined as any, "");

    this.outdir = props.outdir ?? ".cdktg.out";
  }

  /**
   * Synthesizes the model to the output directory
   */
  public synth(): void {
    fs.mkdirSync(this.outdir, { recursive: true });

    const manifest = new Manifest({
      outdir: this.outdir,
    });

    const models = new Array<Model>();

    this.node.findAll().forEach((n) => {
      if (n instanceof Model) {
        models.push(n);
      }
    });

    models.forEach((m) => {
      const filename = `${`${m.node.id}`.replace(/[^0-9a-zA-Z-_.]/g, "")}`;
      const filepath = path.join(this.outdir, `${filename}.yml`);

      Yaml.save(filepath, [m._toThreagile()]);

      manifest.addModel(m.node.id, filename);
    });

    manifest.save();
  }
}
