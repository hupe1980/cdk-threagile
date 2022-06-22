import * as path from "path";
import { Construct } from "constructs";
import * as fs from "fs-extra";

import { Annotations } from "./annotations";
import { Model } from "./model";

export class Image {
  private declare model: Model;

  constructor(public readonly filePath: string, public readonly title: string) {
    if (!fs.existsSync(this.filePath)) {
      throw new Error(`Image file "${this.filePath}" does not exist.`);
    }

    if (!fs.lstatSync(this.filePath).isFile()) {
      throw new Error(`File path "${this.filePath}" is not a file.`);
    }
  }

  /**
   * @internal
   */
  public _bind(scope: Construct) {
    this.model = Model.of(scope);

    const extension = path.extname(this.filePath);

    if (![".jpeg", ".jpg", ".png", ".gif"].includes(extension)) {
      Annotations.of(scope).addWarning(
        `Unsupported file extension. Image "${this.filePath}" may be ignored.`
      );
    }

    this.model.synthesizer.addFileAsset(this.filePath);
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      [this.filePath]: this.title,
    };
  }
}

export interface OverviewProps {
  readonly description: string;
  readonly images?: Image[];
}

export class Overview {
  public readonly description: string;
  public readonly images?: Image[];

  constructor(props: OverviewProps) {
    this.description = props.description;
    this.images = props.images;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      description: this.description,
      images: this.images?.map((i) => i._toThreagile()),
    };
  }
}
