export interface SecurityRequirementProps {
  readonly name: string;
  readonly description: string;
}

export class SecurityRequirement {
  public static readonly INPUT_VALIDATION = new SecurityRequirement({
    name: "Input Validation",
    description:
      "Strict input validation is required to reduce the overall attack surface.",
  });

  public static readonly SECURING_ADMINISTRATIVE_ACCESS =
    new SecurityRequirement({
      name: "Securing Administrative Access",
      description:
        "Administrative access must be secured with strong encryption and multi-factor authentication.",
    });

  public readonly name: string;
  public readonly description: string;

  constructor(props: SecurityRequirementProps) {
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
