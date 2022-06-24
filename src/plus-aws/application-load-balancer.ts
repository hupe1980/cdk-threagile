import { Construct } from "constructs";
import {
  CIATriad,
  Encryption,
  Machine,
  Size,
  TechnicalAsset,
  TechnicalAssetType,
  Technology,
  Usage,
} from "..";
import { SecurityGroup } from "./security-group";

export interface ApplicationLoadBalancerProps {
  readonly waf?: boolean;
  readonly securityGroup?: SecurityGroup;
  readonly description?: string;
  readonly ciaTriad: CIATriad;
  readonly tags?: string[];
}

export class ApplicationLoadBalancer extends TechnicalAsset {
  public readonly securityGroup: SecurityGroup;

  constructor(
    scope: Construct,
    id: string,
    props: ApplicationLoadBalancerProps
  ) {
    super(scope, id, {
      description: props.description,
      type: TechnicalAssetType.PROCESS,
      usage: Usage.BUSINESS,
      humanUse: false,
      size: Size.COMPONENT,
      technology: props.waf ? Technology.WAF : Technology.LOAD_BALANCER,
      tags: props.tags,
      internet: false,
      machine: Machine.VIRTUAL,
      encryption: Encryption.NONE,
      owner: "",
      ciaTriad: props.ciaTriad,
      multiTenant: true,
      redundant: true,
      customDevelopedParts: false,
    });

    this.securityGroup = this.trustBoundary =
      props.securityGroup ?? new SecurityGroup(this, `${id} SG`);

    this.securityGroup.addTechnicalAssets(this);
  }
}
