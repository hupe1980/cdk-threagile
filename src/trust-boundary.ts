import { Construct } from 'constructs';
import { v4 as uuidv4 } from 'uuid';
import * as spec from './spec/threatgile.generated';
import { TechnicalAsset } from './technical-asset';

export interface TrustBoundaryProps {
  readonly description: string;
  readonly type: TrustBoundaryType;
}

export class TrustBoundary extends Construct {
  public readonly uuid: string;

  public readonly description: string;
  public readonly type: TrustBoundaryType;

  private technicalAssetsInside: Set<string>;
  private trustBoundariesNested: Set<string>;

  constructor(model: Construct, id: string, props: TrustBoundaryProps) {
    super(model, id);

    this.uuid = uuidv4();

    this.description = props.description;
    this.type = props.type;

    this.technicalAssetsInside = new Set<string>();
    this.trustBoundariesNested = new Set<string>();
  }

  public addTechnicalAssets(...assets: TechnicalAsset[]) {
    assets.forEach(a => {
      this.technicalAssetsInside.add(a.uuid);
    });
  }

  public addTrustBoundary(boundary: TrustBoundary) {
    this.trustBoundariesNested.add(boundary.uuid);
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile['trust_boundaries'] {
    return {
      [this.node.id]: {
        id: this.uuid,
        description: this.description,
        type: this.type,
        technical_assets_inside: Array.from(this.technicalAssetsInside),
        trust_boundaries_nested: Array.from(this.trustBoundariesNested),
      },
    };
  }
}

export enum TrustBoundaryType {
  NETWORK_ON_PREM = 'network-on-prem',
  NETWORK_DEDICATED_HOSTER = 'network-dedicated-hoster',
  NETWORK_VIRTUAL_LAN = 'network-virtual-lan',
  NETWORK_CLOUD_PROVIDER = 'network-cloud-provider',
  NETWORK_CLOUD_SECURITY_GROUP = 'network-cloud-security-group',
  NETWORK_POLICY_NAMESPACE_ISOLATION = 'network-policy-namespace-isolation',
  EXECUTION_ENVIRONMENT = 'execution-environment'
}