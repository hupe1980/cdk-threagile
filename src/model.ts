import { Construct } from "constructs";

import { Author } from "./author";
import { DataAsset } from "./data-asset";
import { Threagile } from "./spec/threatgile.generated";
import { TechnicalAsset } from "./technical-asset";
import { TrustBoundary } from "./trust-boundary";

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
  readonly date?: Date;

  /**
   * Author of the model
   */
  readonly author: Author;

  /**
   * Business criticality of the target
   */
  readonly businessCriticality: BusinessCriticality;
}

export class Model extends Construct {
  public readonly version: string;
  public readonly title: string;
  public readonly date?: Date;
  public readonly author: Author;
  public readonly businessCriticality: BusinessCriticality;

  constructor(project: Construct, id: string, props: ModelProps) {
    super(project, id);

    this.version = props.version;
    this.title = props.title ?? id;
    this.date = props.date;
    this.author = props.author;
    this.businessCriticality = props.businessCriticality;
  }

  /**
   * @internal
   */
  public _toThreagile(): Threagile {
    const dataAssets = new Array<DataAsset>();
    const technicalAssets = new Array<TechnicalAsset>();
    const trustBoundaries = new Array<TrustBoundary>();

    this.node.findAll().map((n) => {
      if (n instanceof DataAsset) {
        dataAssets.push(n);
      } else if (n instanceof TechnicalAsset) {
        technicalAssets.push(n);
      } else if (n instanceof TrustBoundary) {
        trustBoundaries.push(n);
      }
    });

    const threagile: any = {
      threagile_version: this.version,
      title: this.title,
      data: this.date?.toISOString().split("T")[0],
      author: this.author._toThreagile(),
      business_criticality: this.businessCriticality,
    };

    if (dataAssets.length > 0) {
      threagile.data_assets = {};

      dataAssets.forEach((a) => {
        const obj = a._toThreagile();
        const k = Object.keys(obj)[0];

        threagile.data_assets[k] = obj[k];
      });
    }

    if (technicalAssets.length > 0) {
      threagile.technical_assets = {};

      technicalAssets.forEach((a) => {
        const obj = a._toThreagile();
        const k = Object.keys(obj)[0];

        threagile.technical_assets[k] = obj[k];
      });
    }

    if (trustBoundaries.length > 0) {
      threagile.trust_boundaries = {};

      trustBoundaries.forEach((t) => {
        const obj = t._toThreagile();
        if (obj) {
          const k = Object.keys(obj)[0];

          threagile.trust_boundaries[k] = obj[k];
        }
      });
    }

    return threagile;
  }
}

export enum BusinessCriticality {
  ARCHIVE = "archive",
  OPERATIONAL = "operational",
  IMPORTANT = "important",
  CRITICAL = "critical",
  MISSION_CRITICAL = "mission-critical",
}
