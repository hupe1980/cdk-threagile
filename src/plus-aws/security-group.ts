import { Construct } from "constructs";
import { TrustBoundary, TrustBoundaryType } from "..";

export interface SecurityGroupProps {
  readonly description?: string;
  readonly tags?: string[];
}

export class SecurityGroup extends TrustBoundary {
  constructor(scope: Construct, id: string, props: SecurityGroupProps = {}) {
    super(scope, id, {
      type: TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP,
      description: props.description,
      tags: props.tags,
    });
  }
}
