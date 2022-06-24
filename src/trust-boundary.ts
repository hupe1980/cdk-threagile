import { Construct } from "constructs";
import { Model } from "./model";
import { Resource, ResourceProps } from "./resource";
import * as spec from "./spec/threatgile.generated";
import { TechnicalAsset } from "./technical-asset";

export interface TrustBoundaryProps extends ResourceProps {
  readonly type: TrustBoundaryType;
  readonly tags?: string[];
}

export class TrustBoundary extends Resource {
  public readonly type: TrustBoundaryType;
  public readonly tags?: string[];

  private technicalAssetsInside: Set<string>;
  private trustBoundariesNested: Set<string>;

  constructor(scope: Construct, id: string, props: TrustBoundaryProps) {
    super(scope, id, props);

    this.type = props.type;
    this.tags = props.tags;

    this.technicalAssetsInside = new Set<string>();
    this.trustBoundariesNested = new Set<string>();

    if (this.tags && this.tags.length > 0) {
      const model = Model.of(this);
      model.addTags(...this.tags);
    }
  }

  public addTechnicalAssets(...assets: TechnicalAsset[]) {
    assets.forEach((a) => {
      if (a._trustBoundary && this !== a._trustBoundary) {
        return this.addTrustBoundary(a._trustBoundary);
      }

      this.technicalAssetsInside.add(a.uuid);
    });
  }

  public addTrustBoundary(boundary: TrustBoundary) {
    this.trustBoundariesNested.add(boundary.uuid);
  }

  public isWithinCloud(): boolean {
    return [
      TrustBoundaryType.NETWORK_CLOUD_PROVIDER,
      TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP,
    ].includes(this.type);
  }

  public isNetworkBoundary(): boolean {
    return [
      TrustBoundaryType.NETWORK_ON_PREM,
      TrustBoundaryType.NETWORK_DEDICATED_HOSTER,
      TrustBoundaryType.NETWORK_VIRTUAL_LAN,
      TrustBoundaryType.NETWORK_CLOUD_PROVIDER,
      TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP,
      TrustBoundaryType.NETWORK_POLICY_NAMESPACE_ISOLATION,
    ].includes(this.type);
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile["trust_boundaries"] {
    return {
      [this.node.id]: {
        id: this.uuid,
        description: this.description ?? null,
        type: this.type,
        tags: Array.from(new Set(this.tags)),
        technical_assets_inside: Array.from(this.technicalAssetsInside),
        trust_boundaries_nested: Array.from(this.trustBoundariesNested),
      },
    };
  }
}

export enum TrustBoundaryType {
  NETWORK_ON_PREM = "network-on-prem",
  NETWORK_DEDICATED_HOSTER = "network-dedicated-hoster",
  NETWORK_VIRTUAL_LAN = "network-virtual-lan",
  NETWORK_CLOUD_PROVIDER = "network-cloud-provider",
  NETWORK_CLOUD_SECURITY_GROUP = "network-cloud-security-group",
  NETWORK_POLICY_NAMESPACE_ISOLATION = "network-policy-namespace-isolation",
  EXECUTION_ENVIRONMENT = "execution-environment",
}
