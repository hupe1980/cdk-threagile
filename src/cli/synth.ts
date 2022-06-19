import * as execa from "execa";
import * as fs from "fs-extra";
import { CommandModule, Arguments, Argv, Options } from "yargs";

interface SynthOptions extends Options {
  watch: boolean;
  filename: string;
}

export class SynthCommand<U extends SynthOptions>
  implements CommandModule<{}, U>
{
  public command = "synth <filename>";
  public describe = "synthesize the models";

  builder = (args: Argv): Argv<U> => {
    args.positional("filename", { demandOption: true, type: "string" });
    args.option("watch", {
      boolean: true,
      alias: "w",
      describe: "get watch with it!",
    });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const { filename } = args;

    if (!fs.existsSync(filename)) {
      throw new Error(`File ${filename} not exist!`);
    }

    const command = require.resolve("ts-node/dist/bin");

    execa(command, [filename], {
      stdio: ["ignore", "inherit", "inherit"],
    });
  };
}
