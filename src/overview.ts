import * as path from "path";
import { Construct } from "constructs";

import { Annotations } from "./annotations";

export class Image {
  constructor(
    public readonly filePath: string,
    public readonly title: string
  ) {}

  /**
   * @internal
   */
  public _bind(scope: Construct) {
    const extension = path.extname(this.filePath);

    if (![".jpeg", ".jpg", ".png", ".gif"].includes(extension)) {
      Annotations.of(scope).addWarning(
        `Unsupported file extension. Image "${this.filePath}" may be ignored.`
      );
    }
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
