import { Construct } from "constructs";
import { kebabCase } from "./private/util";

export interface ResourceProps {
  readonly description: string;
}

export abstract class Resource extends Construct {
  public readonly uuid: string;

  public readonly description: string;

  constructor(model: Construct, id: string, props: ResourceProps) {
    super(model, id);

    this.uuid = kebabCase(id);

    this.description = props.description;
  }

  /**
   * @internal
   */
  public abstract _toThreagile(): any;
}
