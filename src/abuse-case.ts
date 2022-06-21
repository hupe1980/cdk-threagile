export interface AbuseCaseProps {
  readonly name: string;
  readonly description: string;
}

export class AbuseCase {
  public static readonly DENIAL_OF_SERVICE = new AbuseCase({
    name: "Denial-of-Service",
    description:
      "As a hacker I want to disturb the functionality of the backend system in order to cause indirect financial damage via unusable features.",
  });

  public static readonly CPU_CYCLE_THEFT = new AbuseCase({
    name: "CPU-Cycle Theft",
    description:
      "As a hacker I want to steal CPU cycles in order to transform them into money via installed crypto currency miners.",
  });

  public static readonly RANSOMWARE = new AbuseCase({
    name: "Ransomware",
    description:
      "As a hacker I want to encrypt the storage and file systems in order to demand ransom.",
  });

  public static readonly IDENTITY_THEFT = new AbuseCase({
    name: "Identity Theft",
    description:
      "As a hacker I want to steal identity data in order to reuse credentials and/or keys on other targets of the same company or outside.",
  });

  public static readonly PII_THEFT = new AbuseCase({
    name: "PII Theft",
    description:
      "As a hacker I want to steal PII (Personally Identifiable Information) data in order to blackmail the company and/or damage their repudiation by publishing them.",
  });

  public readonly name: string;
  public readonly description: string;

  constructor(props: AbuseCaseProps) {
    this.name = props.name;
    this.description = props.description;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      [this.name]: this.description,
    };
  }
}
