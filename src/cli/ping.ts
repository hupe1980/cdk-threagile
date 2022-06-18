import { CommandModule, Arguments, Argv, Options } from 'yargs';

import { Threagile } from '../api/threagile';

interface PingOptions extends Options {
  url: string;
}

export class PingCommand<U extends PingOptions> implements CommandModule<{}, U> {
  public command = 'ping';
  public describe = 'ping the api';

  builder = (args: Argv): Argv<U> => {
    args.option('url', { type: 'string', alias: 'u', describe: '' });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const url = args.url ?? process.env.CDKTG_THREAGILE_BASE_URL;

    const api = new Threagile(url);

    const resp = await api.ping();

    if (resp.status === 200) {
      console.log(`✅  ${resp.data.message}\n`);
    } else {
      console.log('❌  Error\n');
    }
  };
}