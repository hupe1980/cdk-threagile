import { Construct } from "constructs";
import { kebabCase } from "./private/util";

export interface ResourceProps {
  readonly description?: string;
}

export abstract class Resource extends Construct {
  public readonly id: string;
  public readonly title: string;

  public readonly description?: string;

  constructor(scope: Construct, id: string, props: ResourceProps) {
    super(scope, id);

    this.id = kebabCase(id);
    this.title = id;
    this.description = props.description;
  }

  /**
   * @internal
   */
  public abstract _toThreagile(): any;
}
