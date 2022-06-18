import { Construct } from 'constructs';

import { Asset, AssetProps } from './asset';
import * as spec from './spec/threatgile.generated';

export interface DataAssetProps extends AssetProps {
  readonly origin?: string;
  readonly owner?: string;
  readonly quantity: Quantity;
}

export class DataAsset extends Asset {
  public readonly origin?: string;
  public readonly owner?: string;
  public readonly quantity: Quantity;;

  constructor(model: Construct, id: string, props: DataAssetProps) {
    super(model, id, props);

    this.origin = props.origin;
    this.owner = props.owner;
    this.quantity = props.quantity;
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile['data_assets'] {
    return {
      [this.node.id]: {
        id: this.uuid,
        description: this.description,
        usage: this.usage,
        origin: this.origin,
        owner: this.owner,
        quantity: this.quantity,
        confidentiality: 'public',
        integrity: 'archive',
        availability: 'archive',
        //...this.ciaTriad._toThreagile(),
      },
    };
  }
}

export enum Quantity {
  VERY_FEW = 'very-few',
  FEW = 'few',
  MANY = 'many',
  VERY_MANY = 'very-many'
}
