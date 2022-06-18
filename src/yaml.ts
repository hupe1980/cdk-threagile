import * as fs from 'fs';
import * as YAML from 'yaml';

/**
 * YAML utilities.
 */
export class Yaml {
  /**
   * Saves a set of objects as a multi-document YAML file.
   *
   * @param filePath The output path
   * @param docs The set of objects
   */
  public static save(filePath: string, docs: any[]) {
    const data = `# Generated by cdk-threagile - ${Date.now()}\n\n${this.stringify(...docs)}`;
    fs.writeFileSync(filePath, data, { encoding: 'utf8' });
  }

  /**
   * Stringify a document (or multiple documents) into YAML
   *
   * Undefined values become null.
   * Undefiend documents will be ignored.
   *
   * @param docs A set of objects to convert to YAML
   * @returns a YAML string. Multiple docs are separated by `---`.
   */
  public static stringify(...docs: any[]) {
    return docs.map(r => r === undefined ? '\n' : YAML.stringify(r, { keepUndefined: true, lineWidth: 0 })).join('---\n');
  }
}