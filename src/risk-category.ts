import { Construct } from "constructs";
import { Communication } from "./communication";
import { DataAsset } from "./data-asset";

import { Resource, ResourceProps } from "./resource";
import { SharedRuntime } from "./shared-runtime";
import * as spec from "./spec/threatgile.generated";
import { TechnicalAsset } from "./technical-asset";
import { TrustBoundary } from "./trust-boundary";

export interface RiskOptions {
  readonly severity: Severity;
  readonly exploitationLikelihood: ExploitationLikelihood;
  readonly exploitationImpact: ExploitationImpact;
  readonly dataBreachProbability: DataBreachProbability;
  readonly dataBreachTechnicalAssets: TechnicalAsset[];
}

export interface RiskProps extends RiskOptions {
  readonly mostRelevantTechnicalAsset?: TechnicalAsset;
  readonly mostRelevantDataAsset?: DataAsset;
  readonly mostRelevantCommunicationLink?: Communication;
  readonly mostRelevantTrustBoundary?: TrustBoundary;
  readonly mostRelevantSharedRuntime?: SharedRuntime;
}

export class Risk {
  public readonly id: string;
  public readonly severity: Severity;
  public readonly exploitationLikelihood: ExploitationLikelihood;
  public readonly exploitationImpact: ExploitationImpact;
  public readonly dataBreachProbability: DataBreachProbability;
  public readonly dataBreachTechnicalAssets: TechnicalAsset[];
  public readonly mostRelevantTechnicalAsset?: TechnicalAsset;
  public readonly mostRelevantDataAsset?: DataAsset;
  public readonly mostRelevantCommunicationLink?: Communication;
  public readonly mostRelevantTrustBoundary?: TrustBoundary;
  public readonly mostRelevantSharedRuntime?: SharedRuntime;

  constructor(id: string, props: RiskProps) {
    this.id = id;
    this.severity = props.severity;
    this.exploitationLikelihood = props.exploitationLikelihood;
    this.exploitationImpact = props.exploitationImpact;
    this.dataBreachProbability = props.dataBreachProbability;
    this.dataBreachTechnicalAssets = props.dataBreachTechnicalAssets;
    this.mostRelevantTechnicalAsset = props.mostRelevantTechnicalAsset;
    this.mostRelevantDataAsset = props.mostRelevantDataAsset;
    this.mostRelevantCommunicationLink = props.mostRelevantCommunicationLink;
    this.mostRelevantTrustBoundary = props.mostRelevantTrustBoundary;
    this.mostRelevantSharedRuntime = props.mostRelevantSharedRuntime;
  }

  /**
   * @internal
   */
  public _toThreagile() {
    return {
      [this.id]: {
        severity: this.severity,
        exploitation_likelihood: this.exploitationLikelihood,
        exploitation_impact: this.exploitationImpact,
        data_breach_probability: this.dataBreachProbability,
        data_breach_technical_assets: this.dataBreachTechnicalAssets.map(
          (a) => a.id
        ),
        most_relevant_data_asset: this.mostRelevantDataAsset?.id,
        most_relevant_technical_asset: this.mostRelevantTechnicalAsset?.id,
        most_relevant_communication_link:
          this.mostRelevantCommunicationLink?.title,
        most_relevant_trust_boundary: this.mostRelevantTrustBoundary?.id,
        most_relevant_shared_runtime: this.mostRelevantSharedRuntime?.id,
      },
    };
  }
}

export interface RiskCategoryProps extends ResourceProps {
  readonly impact: string;
  readonly asvs: string;
  readonly cheatSheet: string;
  readonly action: string;
  readonly mitigation: string;
  readonly check: string;
  readonly function: RiskFunction;
  readonly stride: Stride;
  readonly detectionLogic: string;
  readonly riskAssessment: string;
  readonly falsePositives: string;
  readonly modelFailurePossibleReason?: boolean;
  readonly cwe: number;
}

export class RiskCategory extends Resource {
  public readonly impact: string;
  public readonly asvs: string;
  public readonly cheatSheet: string;
  public readonly action: string;
  public readonly mitigation: string;
  public readonly check: string;
  public readonly function: RiskFunction;
  public readonly stride: Stride;
  public readonly detectionLogic: string;
  public readonly riskAssessment: string;
  public readonly falsePositives: string;
  public readonly modelFailurePossibleReason?: boolean;
  public readonly cwe: number;

  private risks: Risk[];

  constructor(scope: Construct, id: string, props: RiskCategoryProps) {
    super(scope, id, props);

    this.impact = props.impact;
    this.asvs = props.asvs;
    this.cheatSheet = props.cheatSheet;
    this.action = props.action;
    this.mitigation = props.mitigation;
    this.check = props.check;
    this.function = props.function;
    this.stride = props.stride;
    this.detectionLogic = props.detectionLogic;
    this.riskAssessment = props.riskAssessment;
    this.falsePositives = props.falsePositives;
    this.modelFailurePossibleReason = props.modelFailurePossibleReason;
    this.cwe = props.cwe;

    this.risks = new Array<Risk>();
  }

  public identifiedAtDataAsset(target: DataAsset, options: RiskOptions) {
    this.identifiedAtResource(target, options);
  }

  public identifiedAtTechnicalAsset(
    target: TechnicalAsset,
    options: RiskOptions
  ) {
    this.identifiedAtResource(target, options);
  }

  public identifiedAtTrustBoundary(
    target: SharedRuntime,
    options: RiskOptions
  ) {
    this.identifiedAtResource(target, options);
  }

  public identifiedAtSharedRuntime(
    target: SharedRuntime,
    options: RiskOptions
  ) {
    this.identifiedAtResource(target, options);
  }

  public addIdentifiedRisk(risk: Risk) {
    this.risks.push(risk);
  }

  private identifiedAtResource(target: Resource, options: RiskOptions) {
    this.addIdentifiedRisk(
      new Risk(`<b>${this.node.id}</b> risk at <b>${target.node.id}</b>`, {
        ...options,
        mostRelevantDataAsset: target instanceof DataAsset ? target : undefined,
        mostRelevantTechnicalAsset:
          target instanceof TechnicalAsset ? target : undefined,
        mostRelevantTrustBoundary:
          target instanceof TrustBoundary ? target : undefined,
        mostRelevantSharedRuntime:
          target instanceof SharedRuntime ? target : undefined,
      })
    );
  }

  /**
   * @internal
   */
  public _toThreagile(): spec.Threagile["individual_risk_categories"] {
    const threagile: any = {
      [this.title]: {
        id: this.id,
        description: this.description,
        impact: this.impact,
        asvs: this.asvs,
        cheat_sheet: this.cheatSheet,
        action: this.action,
        mitigation: this.mitigation,
        check: this.check,
        function: this.function,
        stride: this.stride,
        detection_logic: this.detectionLogic,
        risk_assessment: this.riskAssessment,
        false_positives: this.falsePositives,
        model_failure_possible_reason: this.modelFailurePossibleReason ?? false,
        cwe: this.cwe,
      },
    };

    threagile[this.node.id].risks_identified = this.risks.reduce(
      (prev, current) => Object.assign(prev, current._toThreagile()),
      {}
    );

    return threagile;
  }
}

export enum RiskFunction {
  BUSINESS_SIDE = "business-side",
  ARCHITECTURE = "architecture",
  DEVELOPMENT = "development",
  OPERATIONS = "operations",
}

export enum Stride {
  SPOOFING = "spoofing",
  TAMPERING = "tampering",
  REPUDIATION = "repudiation",
  INFORMATION_DISCLOSURE = "information-disclosure",
  DENIAL_OF_SERVICE = "denial-of-service",
  ELEVATION_OF_PRIVILEGE = "elevation-of-privilege",
}

export enum Severity {
  LOW = "low",
  MEDIUM = "medium",
  ELEVATED = "elevated",
  HIGH = "high",
  CRITICAL = "critical",
}

export enum ExploitationLikelihood {
  UNLIKELY = "unlikely",
  LIKELY = "likely",
  VERY_LIKELY = "very-likely",
  FREQUENT = "frequent",
}

export enum ExploitationImpact {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  VERY_HIGH = "very-high",
}

export enum DataBreachProbability {
  IMPROBABLE = "improbable",
  POSSIBLE = "possible",
  PROBABLE = "probable",
}
