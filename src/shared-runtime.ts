import { Construct } from "constructs";
import { Model } from "./model";
import { Resource, ResourceProps } from "./resource";
import * as spec from "./spec/threatgile.generated";
import { TechnicalAsset } from "./technical-asset";

export interface SharedRuntimeProps extends ResourceProps {
  readonly tags?: string[];
}

export class SharedRuntime extends Resource {
  public readonly tags?: string[];

  private technicalAssetsRunning: Set<string>;

  constructor(scope: Construct, id: string, props: SharedRuntimeProps) {
    super(scope, id, props);

    this.tags = props.tags;

    this.technicalAssetsRunning = new Set<string>();

    if (this.tags && this.tags.length > 0) {
      Model.of(this).addTags(...this.tags);
    }
  }

  public runs(...assets: TechnicalAsset[]) {
    assets.forEach((a) => {
      this.technicalAssetsRunning.add(a.uuid);
    });
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile["shared_runtimes"] {
    return {
      [this.node.id]: {
        id: this.uuid,
        description: this.description ?? null,
        tags: Array.from(new Set(this.tags)),
        technical_assets_running: Array.from(this.technicalAssetsRunning),
      },
    };
  }
}
