import { config } from "dotenv";
import * as yargs from "yargs";

import { AnalyzeCommand } from "./analyze";
import { CheckCommand } from "./check";
import { InitCommand } from "./init";
import { PingCommand } from "./ping";
import { SynthCommand } from "./synth";

async function main() {
  config(); //.env

  const ya = yargs;

  ya.command(new InitCommand());
  ya.command(new SynthCommand());
  ya.command(new PingCommand());
  ya.command(new CheckCommand());
  ya.command(new AnalyzeCommand());
  ya.recommendCommands();
  ya.strictCommands();
  ya.showHelpOnFail(false);
  ya.completion();
  ya.help();

  // do not use the default yargs '--version' implementation since it is
  // global by default (it appears on all subcommands)
  ya.version(false);
  ya.option("version", {
    type: "boolean",
    description: "Show version number",
    global: false,
  });

  const args = ya.argv;

  if (args.debug) {
    process.env.DEBUG = "true";
  }
}

main().catch((e: Error) => {
  console.error(e.message);
  process.exit(1);
});
