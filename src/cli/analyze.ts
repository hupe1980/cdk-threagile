import * as path from "path";
//import { Readable } from "stream";
import * as AdmZip from "adm-zip";
import * as fs from "fs-extra";
import { CommandModule, Arguments, Argv, Options } from "yargs";

import { Threagile } from "../api/threagile";
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

    const manifest = Manifest.fromPath(".cdktg.out");

    Object.keys(manifest.models).forEach(async (k) => {
      const modelManifest = manifest.models[k];

      const resp = await api.analyze(
        path.join(".cdktg.out", modelManifest.synthesizedModelPath)
      );

      if (resp.status === 400) {
        console.log(`Errors for model "${k}":`);
        console.log(resp.data.error);
        return;
      }

      const zip = new AdmZip(resp.data);
      zip.extractAllTo(path.join(args.output, modelManifest.sanitizedName));
    });
  };
}
