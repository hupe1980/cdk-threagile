import {
  Authentication,
  Authorization,
  Availability,
  CIATriad,
  Confidentiality,
  DataAsset,
  Encryption,
  Integrity,
  Machine,
  Protocol,
  Quantity,
  Size,
  TechnicalAsset,
  TechnicalAssetType,
  Technology,
  Usage,
} from "cdktg";
import { Construct } from "constructs";

export interface VaultProps {
  readonly vaultName?: string;
  readonly storageType: StorageType;
  readonly authtenticationType: AuthenticationType;
  readonly multiTenant: boolean;
}

export class Vault extends TechnicalAsset {
  public readonly configurationSecrets: DataAsset;
  public readonly vaultStorage?: TechnicalAsset;

  private authentication: Authentication;

  constructor(scope: Construct, id: string, props: VaultProps) {
    super(scope, id, {
      description: props.vaultName
        ? `${props.vaultName} Vault`
        : "No Name Vault",
      type: TechnicalAssetType.PROCESS,
      usage: Usage.DEVOPS,
      humanUse: false,
      size: Size.SERVICE,
      technology: Technology.VAULT,
      internet: false,
      machine: Machine.VIRTUAL,
      encryption: Encryption.TRANSPARENT,
      owner: "",
      ciaTriad: new CIATriad({
        confidentiality: Confidentiality.STRICTLY_CONFIDENTIAL,
        integrity: Integrity.CRITICAL,
        availability: Availability.CRITICAL,
        justification: "Vault components are rated as 'strictly-confidential'.",
      }),
      multiTenant: props.multiTenant,
      redundant: false,
      customDevelopedParts: false,
    });

    this.authentication = (() => {
      switch (props.authtenticationType) {
        case AuthenticationType.CERTIFICATE:
          return Authentication.CLIENT_CERTIFICATE;
        case AuthenticationType.CLOUD_PROVIDER:
          return Authentication.EXTERNALIZED;
        case AuthenticationType.CONTAINER_PLATFORM:
          return Authentication.EXTERNALIZED;
        case AuthenticationType.CREDENTIALS:
          return Authentication.CREDENTIALS;
        default:
          return Authentication.NONE;
      }
    })();

    this.configurationSecrets = new DataAsset(this, "Configuration Secrets", {
      description:
        "Configuration secrets (like credentials, keys, certificates, etc.) secured and managed by a vault",
      usage: Usage.DEVOPS,
      origin: "",
      owner: "",
      quantity: Quantity.VERY_FEW,
      ciaTriad: new CIATriad({
        confidentiality: Confidentiality.STRICTLY_CONFIDENTIAL,
        integrity: Integrity.CRITICAL,
        availability: Availability.CRITICAL,
        justification:
          "Configuration secrets are rated as being 'strictly-confidential'.",
      }),
    });

    this.processes(this.configurationSecrets);

    if (props.storageType === StorageType.IN_MEMORY) {
      this.stores(this.configurationSecrets);
    }

    if (
      props.storageType === StorageType.FILESYSTEM ||
      props.storageType === StorageType.DATABASE
    ) {
      this.vaultStorage = new TechnicalAsset(this, "Vault Storage", {
        description: "Vault Storage",
        type: TechnicalAssetType.DATASTORE,
        usage: Usage.DEVOPS,
        humanUse: false,
        size: Size.COMPONENT,
        technology:
          props.storageType === StorageType.FILESYSTEM
            ? Technology.FILE_SERVER
            : Technology.DATABASE,
        internet: false,
        machine: Machine.VIRTUAL,
        encryption: Encryption.SYMMETRIC_SHARED_KEY,
        owner: "",
        ciaTriad: new CIATriad({
          confidentiality: Confidentiality.CONFIDENTIAL,
          integrity: Integrity.CRITICAL,
          availability: Availability.CRITICAL,
          justification:
            "Vault components are only rated as 'confidential' as vaults usually apply a trust barrier to encrypt all data-at-rest with a vault key.",
        }),
        multiTenant: props.multiTenant,
        redundant: false,
        customDevelopedParts: false,
      });

      this.vaultStorage.stores(this.configurationSecrets);

      const vaultStorageAccess = this.communicatesWith(
        "Vault Storage Access",
        this.vaultStorage,
        {
          description: "Vault Storage Access",
          protocol:
            props.storageType === StorageType.FILESYSTEM
              ? Protocol.LOCAL_FILE_ACCESS
              : Protocol.SQL_ACCESS_PROTOCOL,
          authentication: Authentication.CREDENTIALS,
          authorization: Authorization.TECHNICAL_USER,
          vpn: false,
          ipFiltered: false,
          readonly: false,
          usage: Usage.DEVOPS,
        }
      );

      vaultStorageAccess.sends(this.configurationSecrets);
      vaultStorageAccess.receives(this.configurationSecrets);
    }
  }

  public isUsedBy(client: TechnicalAsset) {
    const vaultAccessTraffic = client.communicatesWith(
      `Vault Access Traffic by (${client.node.id})`,
      this,
      {
        description: `Vault Access Traffic by (${client.node.id})`,
        protocol: Protocol.HTTPS,
        authentication: this.authentication,
        authorization: Authorization.TECHNICAL_USER,
        vpn: false,
        ipFiltered: false,
        readonly: true,
        usage: Usage.DEVOPS,
      }
    );

    vaultAccessTraffic.receives(this.configurationSecrets);
  }
}

export enum StorageType {
  /**
   * Cloud Provider (storage buckets or similar)
   */
  CLOUD_PROVIDER = 1,

  /**
   * Container Platform (orchestration platform managed storage)
   */
  CONTAINER_PLATFORM = 2,

  /**
   * Database (SQL-DB, NoSQL-DB, object store or similar)
   */
  DATABASE = 3,

  /**
   * Filesystem (local or remote)
   */
  FILESYSTEM = 4,

  /**
   * In-Memory (no persistent storage of secrets)
   */
  IN_MEMORY = 5,

  /**
   * Service Registry
   */
  SERVICE_REGISTRY = 6,
}

export enum AuthenticationType {
  /**
   * Certificate
   */
  CERTIFICATE = 1,

  /**
   * Cloud Provider (relying on cloud provider instance authentication)
   */
  CLOUD_PROVIDER = 2,

  /**
   * Container Platform (orchestration platform managed authentication)
   */
  CONTAINER_PLATFORM = 3,

  /**
   * Credentials (username/password, API-key, secret token, etc.)
   */
  CREDENTIALS = 4,
}
