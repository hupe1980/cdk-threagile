import { Construct } from "constructs";

import { CIATriad } from "./cia-triad";
import { Communication, CommunicationOptions } from "./communication";
import { DataAsset } from "./data-asset";
import { Model } from "./model";
import { Resource, ResourceProps } from "./resource";
import { Scope } from "./scope";
import * as spec from "./spec/threatgile.generated";
import { TrustBoundary } from "./trust-boundary";
import { Usage } from "./usage";

export interface TechnicalAssetProps extends ResourceProps {
  readonly type: TechnicalAssetType;
  readonly usage: Usage;
  readonly humanUse: boolean;
  readonly scope?: Scope;
  readonly size: Size;
  readonly technology: Technology;
  readonly tags?: string[];
  readonly internet: boolean;
  readonly machine: Machine;
  readonly encryption: Encryption;
  readonly owner?: string;
  readonly ciaTriad: CIATriad;
  readonly multiTenant: boolean;
  readonly redundant: boolean;
  readonly trustBoundary?: TrustBoundary;
  readonly customDevelopedParts?: boolean;
  readonly dataFormatsAccepted?: DataFormat[];
}

export class TechnicalAsset extends Resource {
  public readonly type: TechnicalAssetType;
  public readonly usage: Usage;
  public readonly internet: boolean;
  public readonly humanUse: boolean;
  public readonly scope?: Scope;
  public readonly size: Size;
  public readonly technology: Technology;
  public readonly tags?: string[];
  public readonly machine: Machine;
  public readonly encryption: Encryption;
  public readonly owner?: string;
  public readonly ciaTriad: CIATriad;
  public readonly multiTenant: boolean;
  public readonly redundant: boolean;
  public readonly customDevelopedParts: boolean;
  public readonly dataFormatsAccepted?: DataFormat[];

  protected trustBoundary?: TrustBoundary;

  private dataAssetsProcessed: Set<string>;
  private dataAssetsStored: Set<string>;
  private communications: Communication[];

  constructor(scope: Construct, id: string, props: TechnicalAssetProps) {
    super(scope, id, props);

    this.type = props.type;
    this.usage = props.usage;
    this.humanUse = props.humanUse;
    this.internet = props.internet;
    this.scope = props.scope ?? Scope.inScope();
    this.size = props.size;
    this.technology = props.technology;
    this.tags = props.tags;
    this.machine = props.machine;
    this.encryption = props.encryption;
    this.owner = props.owner;
    this.ciaTriad = props.ciaTriad;
    this.multiTenant = props.multiTenant;
    this.redundant = props.redundant;
    this.customDevelopedParts = props.customDevelopedParts ?? false;
    this.dataFormatsAccepted = props.dataFormatsAccepted;

    this.dataAssetsProcessed = new Set<string>();
    this.dataAssetsStored = new Set<string>();

    this.communications = new Array<Communication>();

    if (this.tags && this.tags.length > 0) {
      Model.of(this).addTags(...this.tags);
    }

    if (props.trustBoundary) {
      this.trustBoundary = props.trustBoundary;
      this.trustBoundary.addTechnicalAssets(this);
    }
  }

  public processes(...assets: DataAsset[]) {
    assets.forEach((a) => {
      this.dataAssetsProcessed.add(a.uuid);
    });
  }

  public stores(...assets: DataAsset[]) {
    assets.forEach((a) => {
      this.dataAssetsStored.add(a.uuid);
    });
  }

  public isWebApplication(): boolean {
    return [
      Technology.WEB_SERVER,
      Technology.WEB_APPLICATION,
      Technology.APPLICATION_SERVER,
      Technology.ERP,
      Technology.CMS,
      Technology.IDENTITIY_PROVIDER,
      Technology.REPORT_ENGINE,
    ].includes(this.technology);
  }

  public isWebService(): boolean {
    return [Technology.WEB_SERVICE_REST, Technology.WEB_SERVICE_SOAP].includes(
      this.technology
    );
  }

  public isTrafficForwarding(): boolean {
    return [
      Technology.LOAD_BALANCER,
      Technology.REVERSE_PROXY,
      Technology.WAF,
    ].includes(this.technology);
  }

  public communicatesWith(
    id: string,
    target: TechnicalAsset,
    options: CommunicationOptions
  ): Communication {
    const communication = new Communication(id, {
      source: this,
      target: target,
      ...options,
    });

    this.communications.push(communication);

    return communication;
  }

  /**
   * @internal
   */
  public get _trustBoundary() {
    return this.trustBoundary;
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile["technical_assets"] {
    const threagile: any = {
      [this.node.id]: {
        id: this.uuid,
        description: this.description ?? null,
        type: this.type,
        usage: this.usage,
        used_as_client_by_human: this.humanUse,
        ...this.scope?._toThreagile(),
        size: this.size,
        technology: this.technology,
        tags: Array.from(new Set(this.tags)),
        internet: this.internet,
        machine: this.machine,
        encryption: this.encryption,
        owner: this.owner,
        ...this.ciaTriad._toThreagile(),
        multitenant: this.multiTenant,
        redundant: this.redundant,
        custom_developed_parts: this.customDevelopedParts,
        data_assets_processed: Array.from(this.dataAssetsProcessed),
        data_assets_stored: Array.from(this.dataAssetsStored),
        data_formats_accepted: this.dataFormatsAccepted,
      },
    };

    threagile[this.node.id].communication_links = this.communications.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    return threagile;
  }
}

export enum TechnicalAssetType {
  EXTERNAL_ENTITY = "external-entity",
  PROCESS = "process",
  DATASTORE = "datastore",
}

export enum Size {
  SYSTEM = "system",
  SERVICE = "service",
  APPLICATION = "application",
  COMPONENT = "component",
}

export enum Technology {
  UNKNOWN = "unknown-technology",
  CLIENT_SYSTEM = "client-system",
  BROWSER = "browser",
  DESKTOP = "desktop",
  MOBILE_APP = "mobile-app",
  DEVOPS_CLIENT = "devops-client",
  WEB_SERVER = "web-server",
  WEB_APPLICATION = "web-application",
  APPLICATION_SERVER = "application-server",
  DATABASE = "database",
  FILE_SERVER = "file-server",
  LOCAL_FILE_SERVER = "local-file-system",
  ERP = "erp",
  CMS = "cms",
  WEB_SERVICE_REST = "web-service-rest",
  WEB_SERVICE_SOAP = "web-service-soap",
  EJB = "ejb",
  SEARCH_INDEX = "search-index",
  SEARCH_ENGINE = "search-engine",
  SERVICE_REGISTRY = "service-registry",
  REVERSE_PROXY = "reverse-proxy",
  LOAD_BALANCER = "load-balancer",
  BUILD_PIPELINE = "build-pipeline",
  SOURCECODE_REPOSITORY = "sourcecode-repository",
  ARTIFACT_REGISTRY = "artifact-registry",
  CODE_INSPECTION_PLATFORM = "code-inspection-platform",
  MONITORING = "monitoring",
  LDAP_SERVER = "ldap-server",
  CONTAINER_PLATFORM = "container-platform",
  BATCH_PROCESSING = "batch-processing",
  EVENT_LISTENER = "event-listener",
  IDENTITIY_PROVIDER = "identity-provider",
  IDENTITY_STORE_LDAP = "identity-store-ldap",
  IDENTITY_STORE_DATABASE = "identity-store-database",
  TOOL = "tool",
  CLI = "cli",
  TASK = "task",
  FUNCTION = "function",
  GATEWAY = "gateway",
  IOT_DEVICE = "iot-device",
  MESSAGE_QUEUE = "message-queue",
  STREAM_PROCESSING = "stream-processing",
  SERVICE_MESH = "service-mesh",
  DATA_LAKE = "data-lake",
  REPORT_ENGINE = "report-engine",
  AI = "ai",
  MAIL_SERVER = "mail-server",
  VAULT = "vault",
  HASM = "hsm",
  WAF = "waf",
  IDS = "ids",
  IPS = "ips",
  SCHEDULER = "scheduler",
  MAINFRAME = "mainframe",
  BLOCK_STORAGE = "block-storage",
  LIBRARY = "library",
}

export enum Machine {
  PHYSICAL = "physical",
  VIRTUAL = "virtual",
  CONTAINER = "container",
  SERVERLESS = "serverless",
}

export enum Encryption {
  NONE = "none",
  TRANSPARENT = "transparent",
  SYMMETRIC_SHARED_KEY = "data-with-symmetric-shared-key",
  ASYMMETRIC_SHARED_KEY = "data-with-asymmetric-shared-key",
  ENDUSER_INDIVIDUAL_KEY = "data-with-enduser-individual-key",
}

export enum DataFormat {
  JSON = "json",
  XML = "xml",
  SERIALIZATION = "serialization",
  FILE = "file",
  CSV = "csv",
}
