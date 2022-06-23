import { TrustBoundary, TrustBoundaryType } from "cdktg";
import { Construct } from "constructs";

export interface SecurityGroupProps {
  readonly description?: string;
  readonly tags?: string[];
}

export class SecurityGroup extends TrustBoundary {
  constructor(scope: Construct, id: string, props: SecurityGroupProps = {}) {
    super(scope, id, {
      type: TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP,
      description: props.description ?? id,
      tags: props.tags,
    });
  }
}
