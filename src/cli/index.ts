import { config } from 'dotenv';
import * as yargs from 'yargs';

import { AnalyseCommand } from './analyse';
import { CheckCommand } from './check';
import { PingCommand } from './ping';
import { SynthCommand } from './synth';

async function main() {
  config(); //.env

  const ya = yargs;

  ya.command(new SynthCommand());
  ya.command(new PingCommand());
  ya.command(new CheckCommand());
  ya.command(new AnalyseCommand());
  ya.recommendCommands();
  ya.strictCommands();
  ya.showHelpOnFail(false);
  ya.completion();
  ya.help();

  // do not use the default yargs '--version' implementation since it is
  // global by default (it appears on all subcommands)
  ya.version(false);
  ya.option('version', {
    type: 'boolean',
    description: 'Show version number',
    global: false,
  });

  const args = ya.argv;

  if (args.debug) {
    process.env.DEBUG = 'true';
  }
}


main().catch((e) => {
  console.error(e.stack);
  process.exit(1);
});