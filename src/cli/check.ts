import * as path from "path";
import { CommandModule, Arguments, Argv, Options } from "yargs";

import { Threagile } from "../api/threagile";
import { CDKTG_OUT_DIR } from "../common";
import { Manifest } from "../manifest";

interface CheckOptions extends Options {
  url: string;
}

export class CheckCommand<U extends CheckOptions>
  implements CommandModule<{}, U>
{
  public command = "check";
  public describe = "check the models";

  builder = (args: Argv): Argv<U> => {
    args.option("url", { type: "string", alias: "u", describe: "" });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const url = args.url ?? process.env.CDKTG_THREAGILE_BASE_URL;

    const api = new Threagile(url);

    const manifest = Manifest.fromPath(CDKTG_OUT_DIR);

    for (const k in manifest.models) {
      try {
        const modelManifest = manifest.models[k];

        const resp = await api.check(
          path.join(".cdktg.out", modelManifest.synthesizedModelPath)
        );

        console.log(`Results for model "${modelManifest.name}":`);

        if (resp.status === 200) {
          console.log(`✅  ${resp.data.message}\n`);
        } else {
          console.log(`❌  ${resp.data.message}\n`);
        }
      } catch (e) {
        console.log(`❌  ${(e as Error).message}`);
      }
    }
  };
}
