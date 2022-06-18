import * as path from 'path';
import * as AdmZip from 'adm-zip';
import * as fs from 'fs-extra';
import { CommandModule, Arguments, Argv, Options } from 'yargs';

import { Threagile } from '../api/threagile';
import { Manifest } from '../manifest';

interface AnalyseOptions extends Options {
  url: string;
  out: string;
}

export class AnalyseCommand<U extends AnalyseOptions> implements CommandModule<{}, U> {
  public command = 'analyse';
  public describe = 'analyze the models';

  builder = (args: Argv): Argv<U> => {
    args.option('url', { type: 'string', alias: 'u', describe: '' });
    args.option('out', { type: 'string', alias: 'o', describe: '', default: 'dist' });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const url = args.url ?? process.env.CDKTG_THREAGILE_BASE_URL;

    fs.mkdirSync(args.out, { recursive: true });

    const api = new Threagile(url);

    const manifest = Manifest.fromFile('.cdktg.out');

    Object.keys(manifest.data).forEach(async (k) => {
      const filepath = path.join(manifest.outdir, `${manifest.data[k]}.yml`);
      const resp = await api.analyse(filepath);

      if (resp.status === 400) {
        console.log(resp.data.error);
        return;
      }

      const zip = new AdmZip(resp.data);
      zip.extractAllTo(path.join(args.out, k));
    });
  };
}