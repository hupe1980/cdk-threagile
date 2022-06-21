export interface RiskTrackingProps {
  readonly status?: RiskTrackingStatus;
  readonly justification?: string;
  readonly ticket?: string;
  readonly date?: string;
  readonly checkedBy?: string;
}
export class RiskTracking {
  public readonly id: string;
  public readonly status: RiskTrackingStatus;
  public readonly justification?: string;
  public readonly ticket?: string;
  public readonly date?: string;
  public readonly checkedBy?: string;

  constructor(id: string, props: RiskTrackingProps) {
    this.id = id;
    this.status = props.status ?? RiskTrackingStatus.UNCHECKED;
    this.justification = props.justification;
    this.ticket = props.ticket;

    if (props.date) {
      this.date = new Date(props.date).toISOString().split("T")[0];
    }

    this.checkedBy = props.checkedBy;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      [this.id]: {
        status: this.status,
        justification: this.justification,
        ticket: this.ticket,
        date: this.date,
        checked_by: this.checkedBy,
      },
    };
  }
}

export enum RiskTrackingStatus {
  UNCHECKED = "unchecked",
  IN_DISCUSSION = "in-discussion",
  ACCEPTED = "accepted",
  IN_PROGRESS = "in-progress",
  MITIGATED = "mitigated",
  FALSE_POSITIVE = "false-positive",
}
