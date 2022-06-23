import { TrustBoundary, TrustBoundaryType } from "cdktg";
import { Construct } from "constructs";

export interface CloudProps {
  readonly description?: string;
  readonly tags?: string[];
}

export class Cloud extends TrustBoundary {
  constructor(scope: Construct, id: string, props: CloudProps = {}) {
    super(scope, id, {
      type: TrustBoundaryType.NETWORK_CLOUD_PROVIDER,
      description: props.description ?? id,
      tags: props.tags,
    });
  }
}
