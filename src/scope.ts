export interface OutOfScopeProps {
  readonly outOfScope: boolean;
  readonly justification?: string;
}

export class Scope {
  public static inScope(justification?: string) {
    return new Scope(false, justification);
  }

  public static outOfScope(justification?: string) {
    return new Scope(true, justification);
  }

  constructor(public out: boolean, public readonly justification?: string) {}

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      out_of_scope: this.out,
      justification_out_of_scope: this.justification,
    };
  }
}
