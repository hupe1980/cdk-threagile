import { Construct, IConstruct } from "constructs";
import { AbuseCase } from "./abuse-case";

import { Author } from "./author";
import { DataAsset } from "./data-asset";
import { RiskCategory } from "./risk-category";
import { SecurityRequirement } from "./security-requirement";
import { SharedRuntime } from "./shared-runtime";
import { Threagile } from "./spec/threatgile.generated";
import { IModelSynthesizer, ModelSynthesizer } from "./synthesizer";
import { TechnicalAsset } from "./technical-asset";
import { TrustBoundary } from "./trust-boundary";

const MODEL_SYMBOL = Symbol.for("cdktg/Model");

export interface Question {
  readonly text: string;
  readonly answer?: string;
}

export interface ModelProps {
  /**
   * Version of the Threagile toolkit
   */
  readonly version: string;

  /**
   * Title of the model
   */
  readonly title?: string;

  /**
   * Date of the model
   */
  readonly date?: string;

  /**
   * Author of the model
   */
  readonly author: Author;

  /**
   * Individual management summary for the report
   */
  readonly managementSummary?: string;

  /**
   * Business criticality of the target
   */
  readonly businessCriticality: BusinessCriticality;

  /**
   * Custom questions for the report
   */
  readonly questions?: Question[];

  /**
   * Custom abuse cases for the report
   */
  readonly abuseCases?: AbuseCase[];

  /**
   * Custom security requirements for the report
   */
  readonly securityRequirements?: SecurityRequirement[];
}

export class Model extends Construct {
  public static isModel(x: any): x is Model {
    return x !== null && typeof x === "object" && MODEL_SYMBOL in x;
  }

  public static of(construct: IConstruct): Model {
    return _lookup(construct);

    function _lookup(c: IConstruct): Model {
      if (Model.isModel(c)) {
        return c;
      }

      const node = c.node;

      if (!node.scope) {
        throw new Error(
          `No model could be identified for the construct at path '${construct.node.path}'`
        );
      }

      return _lookup(node.scope);
    }
  }

  public readonly version: string;
  public readonly title: string;
  public readonly date?: string;
  public readonly author: Author;
  public readonly managementSummary?: string;
  public readonly businessCriticality: BusinessCriticality;

  public synthesizer: IModelSynthesizer;

  private readonly questions: Map<string, string>;
  private readonly abuseCases: Map<string, string>;
  private readonly securityRequirements: Map<string, string>;
  private readonly tags: Set<string>;
  private readonly rawOverrides: Record<string, unknown>;

  constructor(project: Construct, id: string, props: ModelProps) {
    super(project, id);

    this.version = props.version;
    this.title = props.title ?? id;
    this.date = props.date
      ? new Date(props.date).toISOString().split("T")[0]
      : undefined;
    this.author = props.author;
    this.managementSummary = props.managementSummary;
    this.businessCriticality = props.businessCriticality;

    this.questions = new Map<string, string>();
    props.questions?.forEach((q) => {
      this.addQuestion(q.text, q.answer);
    });

    this.abuseCases = new Map<string, string>();
    if (props.abuseCases && props.abuseCases.length > 0) {
      this.addAbuseCases(...props.abuseCases);
    }

    this.securityRequirements = new Map<string, string>();
    if (props.securityRequirements && props.securityRequirements.length > 0) {
      this.addSecurityRequirements(...props.securityRequirements);
    }

    this.tags = new Set<string>();
    this.rawOverrides = {};

    this.synthesizer = new ModelSynthesizer(this, false);

    Object.defineProperty(this, MODEL_SYMBOL, { value: true });
  }

  public addTag(tag: string) {
    this.addTags(tag);
  }

  public addTags(...tags: string[]) {
    tags.forEach((tag) => {
      this.tags.add(tag);
    });
  }

  public addQuestion(text: string, answer = "") {
    // "" as answer signals "unanswered"
    if (this.questions.has(text)) {
      throw new Error(`Duplicated question "${text}"`);
    }

    this.questions.set(text, answer);
  }

  public addAbuseCases(...cases: AbuseCase[]) {
    cases.forEach((c) => {
      if (this.abuseCases.has(c.name)) {
        throw new Error(`Duplicated abuse case "${c.name}"`);
      }

      this.abuseCases.set(c.name, c.description);
    });
  }

  public addSecurityRequirements(...requirements: SecurityRequirement[]) {
    requirements.forEach((r) => {
      if (this.abuseCases.has(r.name)) {
        throw new Error(`Duplicated security requirement "${r.name}"`);
      }

      this.securityRequirements.set(r.name, r.description);
    });
  }

  public addOverride(path: string, value: unknown) {
    const parts = path.split(".");
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject =
        curr[key] != null &&
        typeof curr[key] === "object" &&
        !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  /**
   * @internal
   */
  public _toThreagile(): Threagile {
    const dataAssets = new Array<DataAsset>();
    const technicalAssets = new Array<TechnicalAsset>();
    const trustBoundaries = new Array<TrustBoundary>();
    const sharedRuntimes = new Array<SharedRuntime>();
    const individualRiskCategories = new Array<RiskCategory>();

    this.node.findAll().map((n) => {
      if (n instanceof DataAsset) {
        dataAssets.push(n);
      } else if (n instanceof TechnicalAsset) {
        technicalAssets.push(n);
      } else if (n instanceof TrustBoundary) {
        trustBoundaries.push(n);
      } else if (n instanceof SharedRuntime) {
        sharedRuntimes.push(n);
      } else if (n instanceof RiskCategory) {
        individualRiskCategories.push(n);
      }
    });

    const threagile: any = {
      threagile_version: this.version,
      title: this.title,
      data: this.date,
      author: this.author._toThreagile(),
      management_summary_comment: this.managementSummary,
      business_criticality: this.businessCriticality,
      questions: Object.fromEntries(this.questions),
      abuse_cases: Object.fromEntries(this.abuseCases),
      security_requirements: Object.fromEntries(this.securityRequirements),
      tags_available: Array.from(this.tags),
    };

    threagile.data_assets = dataAssets.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    threagile.technical_assets = technicalAssets.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    threagile.trust_boundaries = trustBoundaries.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    threagile.shared_runtimes = sharedRuntimes.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    threagile.individual_risk_categories = individualRiskCategories.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    return {
      ...threagile,
      ...(Object.keys(this.rawOverrides).length > 0
        ? { overrides: { stack: Object.keys(this.rawOverrides) } }
        : {}),
    };
  }
}

export enum BusinessCriticality {
  ARCHIVE = "archive",
  OPERATIONAL = "operational",
  IMPORTANT = "important",
  CRITICAL = "critical",
  MISSION_CRITICAL = "mission-critical",
}
