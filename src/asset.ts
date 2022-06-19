import { Construct } from "constructs";
import { v4 as uuidv4 } from "uuid";

import { CIATriad } from "./cia-triade";
import { Usage } from "./usage";

export interface AssetProps {
  readonly description: string;
  readonly usage: Usage;
  readonly ciaTriad: CIATriad;
}

export abstract class Asset extends Construct {
  public readonly uuid: string;

  public readonly description: string;
  public readonly usage: Usage;
  public readonly ciaTriad: CIATriad;

  constructor(model: Construct, id: string, props: AssetProps) {
    super(model, id);

    this.uuid = uuidv4();

    this.description = props.description;
    this.usage = props.usage;
    this.ciaTriad = props.ciaTriad;
  }

  /**
   * @internal
   */
  public abstract _toThreagile(): any;
}
