import { Construct } from "constructs";
import {
  TechnicalAsset,
  TechnicalAssetType,
  Usage,
  Scope,
  Machine,
  Encryption,
  CIATriad,
  Size,
  Technology,
} from "..";

export interface BrowserProps {
  readonly description?: string;
  readonly scope: Scope;
  readonly owner?: string;
  readonly ciaTriad: CIATriad;
}

export class Browser extends TechnicalAsset {
  constructor(scope: Construct, id: string, props: BrowserProps) {
    super(scope, id, {
      description: props.description,
      type: TechnicalAssetType.EXTERNAL_ENTITY,
      usage: Usage.BUSINESS,
      humanUse: true,
      scope: props.scope,
      size: Size.APPLICATION,
      technology: Technology.BROWSER,
      internet: true,
      machine: Machine.PHYSICAL,
      encryption: Encryption.NONE,
      owner: props.owner,
      ciaTriad: props.ciaTriad,
      multiTenant: false,
      redundant: false,
      customDevelopedParts: false,
    });
  }
}
