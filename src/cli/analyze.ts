import * as path from "path";
import * as AdmZip from "adm-zip";
import * as fs from "fs-extra";
import { CommandModule, Arguments, Argv, Options } from "yargs";

import { Threagile } from "../api/threagile";
import { CDKTG_OUT_DIR } from "../common";
import { Manifest } from "../manifest";

interface AnalyzeOptions extends Options {
  url: string;
  output: string;
}

export class AnalyzeCommand<U extends AnalyzeOptions>
  implements CommandModule<{}, U>
{
  public command = "analyze";
  public describe = "analyze the models";

  builder = (args: Argv): Argv<U> => {
    args.option("url", {
      type: "string",
      alias: "u",
      describe: "URL of the threagile rest api",
    });
    args.option("output", {
      type: "string",
      alias: "o",
      describe: "",
      default: "dist",
    });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const url = args.url ?? process.env.CDKTG_THREAGILE_BASE_URL;

    fs.mkdirSync(args.output, { recursive: true });

    const api = new Threagile(url);

    const manifest = Manifest.fromPath(CDKTG_OUT_DIR);

    for (const k in manifest.models) {
      try {
        const modelManifest = manifest.models[k];

        const resp = await api.analyze(
          path.join(CDKTG_OUT_DIR, modelManifest.synthesizedModelPath)
        );

        if (resp.status === 400) {
          console.log(`❌  Errors for model "${k}":`);
          console.log(resp.data.error);
          continue;
        }

        const zip = new AdmZip(resp.data);
        zip.extractAllTo(path.join(args.output, modelManifest.sanitizedName));
      } catch (e) {
        console.log(`❌  ${(e as Error).message}`);
      }
    }
  };
}
