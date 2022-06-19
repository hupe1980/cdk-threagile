export interface OutOfScopeProps {
  readonly outOfScope: boolean;
  readonly justification?: string;
}

export abstract class Scope {
  constructor(public readonly justification?: string) {}

  protected abstract get isInScope(): boolean;

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      out_of_scope: !this.isInScope,
      justification_out_of_scope: this.justification,
    };
  }
}

export class OutOfScope extends Scope {
  constructor(justification?: string) {
    super(justification);
  }

  protected get isInScope(): boolean {
    return false;
  }
}

export class InScope extends Scope {
  constructor(justification?: string) {
    super(justification);
  }

  protected get isInScope(): boolean {
    return true;
  }
}
