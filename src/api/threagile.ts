import * as fs from 'fs-extra';
import { Configuration, MetaApi, DirectApi } from './generated';

export class Threagile {
  private metaApi: MetaApi;
  private directApi: DirectApi;

  constructor(baseURL:string) {
    const configuration = new Configuration({
      basePath: baseURL,
    });

    this.metaApi = new MetaApi(configuration);
    this.directApi = new DirectApi(configuration);
  }

  public async ping() {
    return this.metaApi.metaPingGet();
  }

  public async check(filename: string) {
    if (!fs.existsSync(filename)) {
      throw new Error(`File ${filename} not exist!`);
    }

    const file = fs.createReadStream(filename);

    return this.directApi.directCheckPost(file);
  }

  public async analyse(filename: string, dpi = 120) {
    if (!fs.existsSync(filename)) {
      throw new Error(`File ${filename} not exist!`);
    }

    const file = fs.createReadStream(filename);

    return this.directApi.directAnalyzePost(dpi, file, {
      responseType: 'arraybuffer',
    });
  }
}