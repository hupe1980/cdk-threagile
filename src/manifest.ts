import * as path from 'path';
import * as fs from 'fs-extra';

export interface ManifestProps {
  /**
   * The directory to output the threadgile model.
   *
   * @default - .
   */
  readonly outdir?: string;
}

export class Manifest {
  public static fromFile(dir: string): Manifest {
    const manifest = new Manifest({
      outdir: dir,
    });

    const json = fs.readJSONSync(path.join(dir, 'manifest.json'));

    Object.keys(json).forEach(k => {
      manifest.addModel(k, json[k]);
    });

    return manifest;
  }

  /**
   * The output directory into which models will be synthesized.
   */
  public readonly outdir: string;

  public readonly data: Record<string, string>;

  constructor(props: ManifestProps = {}) {
    this.outdir = props.outdir ?? '.cdktg.out';
    this.data = {};
  }

  public addModel(title: string, filePath: string) {
    this.data[title] = filePath;
  }

  public save() {
    fs.writeJSONSync(path.join(this.outdir, 'manifest.json'), this.data, {
      spaces: 4,
    });
  }
}
