export interface CIATriadProps {
  readonly confidentiality: Confidentiality;
  readonly integrity: Integrity;
  readonly availability: Availability;
  readonly justification?: string;
}

export class CIATriad {
  public readonly confidentiality: Confidentiality;
  public readonly integrity: Integrity;
  public readonly availability: Availability;
  public readonly justification?: string;

  constructor(props: CIATriadProps) {
    this.confidentiality = props.confidentiality;
    this.integrity = props.integrity;
    this.availability = props.availability;
    this.justification = props.justification;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      confidentiality: this.confidentiality,
      integrity: this.integrity,
      availability: this.availability,
      justification_cia_rating: this.justification,
    };
  }
}

export enum Confidentiality {
  PUBLIC = 'public',
  INTERNAL = 'internal',
  RESTRICTED = 'restricted',
  CONFIDENTIAL = 'confidential',
  STRICTLY_CONFIDENTIAL = 'strictly-confidential'
}

export enum Integrity {
  ARCHIVE = 'archive',
  OPERATIONAL = 'operational',
  IMPORTANT = 'important',
  CRITICAL = 'critical',
  MISSION_CRITICAL = 'mission-critical'
}

export enum Availability {
  ARCHIVE = 'archive',
  OPERATIONAL = 'operational',
  IMPORTANT = 'important',
  CRITICAL = 'critical',
  MISSION_CRITICAL = 'mission-critical'
}