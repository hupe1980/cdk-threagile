export interface AuthorProps {
  readonly name: string;
  readonly homepage?: string;
}

export class Author {
  public readonly name: string;
  public readonly homepage?: string;

  constructor(props: AuthorProps) {
    this.name = props.name;
    this.homepage = props.homepage;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      name: this.name,
      homepage: this.homepage,
    };
  }
}
