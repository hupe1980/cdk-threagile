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

  public static readonly RANSOMWARE = new AbuseCase({
    name: "Ransomware",
    description:
      "As a hacker I want to encrypt the storage and file systems in order to demand ransom.",
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
