import { Construct } from "constructs";
import { DataAsset } from "./data-asset";
import { TechnicalAsset } from "./technical-asset";
import { Usage } from "./usage";

const COMMUNICATION_SYMBOL = Symbol.for("cdktg/Communication");

export interface CommunicationOptions {
  readonly description: string;
  readonly protocol: Protocol;
  readonly authentication: Authentication;
  readonly authorization: Authorization;
  readonly vpn: boolean;
  readonly ipFiltered: boolean;
  readonly readonly: boolean;
  readonly usage: Usage;
}

export interface CommunicationProps extends CommunicationOptions {
  readonly source: TechnicalAsset;
  readonly target: TechnicalAsset;
}

export class Communication extends Construct {
  public static isCommunicationl(x: any): x is Communication {
    return x !== null && typeof x === "object" && COMMUNICATION_SYMBOL in x;
  }

  public readonly id: string;
  public readonly title: string;
  public readonly source: TechnicalAsset;
  public readonly target: TechnicalAsset;
  public readonly description: string;
  public readonly protocol: Protocol;
  public readonly authentication: Authentication;
  public readonly authorization: Authorization;
  public readonly vpn: boolean;
  public readonly ipFiltered: boolean;
  public readonly readonly: boolean;
  public readonly usage: Usage;

  private dataAssetsSent: Set<DataAsset>;
  private dataAssetsReceived: Set<DataAsset>;

  constructor(scope: Construct, id: string, props: CommunicationProps) {
    super(scope, id);
    this.id = createId(props.source.id, id);
    this.title = id;
    this.source = props.source;
    this.target = props.target;
    this.description = props.description;
    this.protocol = props.protocol;
    this.authentication = props.authentication;
    this.authorization = props.authorization;
    this.vpn = props.vpn;
    this.ipFiltered = props.ipFiltered;
    this.readonly = props.readonly;
    this.usage = props.usage;

    this.dataAssetsSent = new Set<DataAsset>();
    this.dataAssetsReceived = new Set<DataAsset>();
  }

  public sends(...assets: DataAsset[]) {
    assets.forEach((a) => {
      this.dataAssetsSent.add(a);
    });
  }

  public receives(...assets: DataAsset[]) {
    assets.forEach((a) => {
      this.dataAssetsReceived.add(a);
    });
  }

  public hasDataAssets(): boolean {
    return this.dataAssetsSent.size > 0 || this.dataAssetsReceived.size > 0;
  }

  public isEncrypted(): boolean {
    return [
      Protocol.HTTPS,
      Protocol.WSS,
      Protocol.JDBC_ENCRYPTED,
      Protocol.ODBC_ENCRYPTED,
      Protocol.NOSQL_ACCESS_PROTOCOL_ENCRYPTED,
      Protocol.SQL_ACCESS_PROTOCOL_ENCRYPTED,
      Protocol.BINARY_ENCRYPTED,
      Protocol.TEXT_ENCRYPTED,
      Protocol.SSH,
      Protocol.SSH_TUNNEL,
      Protocol.FTPS,
      Protocol.SCP,
      Protocol.LDAPS,
      Protocol.REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED,
      Protocol.IIOP_ENCRYPTED,
      Protocol.JRMP_ENCRYPTED,
      Protocol.SMB_ENCRYPTED,
      Protocol.SMTP_ENCRYPTED,
      Protocol.POP3_ENCRYPTED,
      Protocol.IMAP_ENCRYPTED,
    ].includes(this.protocol);
  }

  public isProcessLocal(): boolean {
    return [
      Protocol.IN_PROCESS_LIBRARY_CALL,
      Protocol.LOCAL_FILE_ACCESS,
      Protocol.CONTAINER_SPAWNING,
    ].includes(this.protocol);
  }

  public isBidirectional(): boolean {
    return this.dataAssetsSent.size > 0 && this.dataAssetsReceived.size > 0;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      [this.title]: {
        target: this.target.id,
        description: this.description,
        protocol: this.protocol,
        authentication: this.authentication,
        authorization: this.authorization,
        vpn: this.vpn,
        ipFiltered: this.ipFiltered,
        readonly: this.readonly,
        usage: this.usage,
        data_assets_sent: Array.from(this.dataAssetsSent).map((a) => a.id),
        data_assets_received: Array.from(this.dataAssetsReceived).map(
          (a) => a.id
        ),
      },
    };
  }
}

function createId(sourceAssetId: string, title: string): string {
  return sourceAssetId + ">" + title.toLowerCase();
}

export enum Protocol {
  UNKNOEN = "unknown-protocol",
  HTTP = "http",
  HTTPS = "https",
  WS = "ws",
  WSS = "wss",
  REVERSE_PROXY_WEB_PROTOCOL = "reverse-proxy-web-protocol",
  REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED = "reverse-proxy-web-protocol-encrypted",
  MQTT = "mqtt",
  JDBC = "jdbc",
  JDBC_ENCRYPTED = "jdbc-encrypted",
  ODBC = "odbc",
  ODBC_ENCRYPTED = "odbc-encrypted",
  SQL_ACCESS_PROTOCOL = "sql-access-protocol",
  SQL_ACCESS_PROTOCOL_ENCRYPTED = "sql-access-protocol-encrypted",
  NOSQL_ACCESS_PROTOCOL = "nosql-access-protocol",
  NOSQL_ACCESS_PROTOCOL_ENCRYPTED = "nosql-access-protocol-encrypted",
  BINARY = "binary",
  BINARY_ENCRYPTED = "binary-encrypted",
  TEXT = "text",
  TEXT_ENCRYPTED = "text-encrypted",
  SSH = "ssh",
  SSH_TUNNEL = "ssh-tunnel",
  SMTP = "smtp",
  SMTP_ENCRYPTED = "smtp-encrypted",
  POP3 = "pop3",
  POP3_ENCRYPTED = "pop3-encrypted",
  IMAP = "imap",
  IMAP_ENCRYPTED = "imap-encrypted",
  FTP = "ftp",
  FTPS = "ftps",
  SFTP = "sftp",
  SCP = "scp",
  LDAP = "ldap",
  LDAPS = "ldaps",
  JMS = "jms",
  NFS = "nfs",
  SMB = "smb",
  SMB_ENCRYPTED = "smb-encrypted",
  LOCAL_FILE_ACCESS = "local-file-access",
  NRPE = "nrpe",
  XMPP = "xmpp",
  IIOP = "iiop",
  IIOP_ENCRYPTED = "iiop-encrypted",
  JRMP = "jrmp",
  JRMP_ENCRYPTED = "jrmp-encrypted",
  IN_PROCESS_LIBRARY_CALL = "in-process-library-call",
  CONTAINER_SPAWNING = "container-spawning",
}

export enum Authentication {
  NONE = "none",
  CREDENTIALS = "credentials",
  SESSION_ID = "session-id",
  TOKEN = "token",
  CLIENT_CERTIFICATE = "client-certificate",
  TWO_FACTOR = "two-factor",
  EXTERNALIZED = "externalized",
}

export enum Authorization {
  NONE = "none",
  TECHNICAL_USER = "technical-user",
  ENDUSER_IDENTITY_PROPAGATION = "enduser-identity-propagation",
}
