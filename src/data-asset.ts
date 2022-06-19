import { Construct } from "constructs";

import { CIATriad } from "./cia-triade";
import { Model } from "./model";
import { Resource, ResourceProps } from "./resource";
import * as spec from "./spec/threatgile.generated";
import { Usage } from "./usage";

export interface DataAssetProps extends ResourceProps {
  readonly usage: Usage;
  readonly tags?: string[];
  readonly origin?: string;
  readonly owner?: string;
  readonly quantity: Quantity;
  readonly ciaTriad: CIATriad;
}

export class DataAsset extends Resource {
  public readonly usage: Usage;
  public readonly tags?: string[];
  public readonly origin?: string;
  public readonly owner?: string;
  public readonly quantity: Quantity;
  public readonly ciaTriad: CIATriad;

  constructor(scope: Construct, id: string, props: DataAssetProps) {
    super(scope, id, props);

    this.usage = props.usage;
    this.tags = props.tags;
    this.origin = props.origin;
    this.owner = props.owner;
    this.quantity = props.quantity;
    this.ciaTriad = props.ciaTriad;

    if (this.tags && this.tags.length > 0) {
      const model = Model.of(this);
      model.addTags(...this.tags);
    }
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile["data_assets"] {
    return {
      [this.node.id]: {
        id: this.uuid,
        description: this.description,
        usage: this.usage,
        tags: Array.from(new Set(this.tags)),
        origin: this.origin,
        owner: this.owner,
        quantity: this.quantity,
        ...this.ciaTriad._toThreagile(),
      },
    };
  }
}

export enum Quantity {
  VERY_FEW = "very-few",
  FEW = "few",
  MANY = "many",
  VERY_MANY = "very-many",
}
