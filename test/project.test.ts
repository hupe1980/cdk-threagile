import {
  Author,
  Availability,
  CIATriad,
  Confidentiality,
  Integrity,
  Model,
  DataAsset,
  TechnicalAsset,
  TrustBoundary,
  TrustBoundaryType,
  TechnicalAssetType,
  Usage,
  Project,
  Encryption,
  Machine,
  Size,
  Technology,
  BusinessCriticality,
  Quantity,
  Protocol,
  Authentication,
  Authorization,
  SharedRuntime,
} from "../src";
import {
  DataBreachProbability,
  ExploitationImpact,
  ExploitationLikelihood,
  RiskCategory,
  RiskFunction,
  Severity,
  Stride,
} from "../src/risk-category";

test("synth the model stub example", () => {
  const project = new Project({
    outdir: "dist",
  });

  const model = new Model(project, "Model Stub", {
    version: "1.0.0",
    date: "2020-03-31",
    author: new Author({
      name: "John Doe",
    }),
    businessCriticality: BusinessCriticality.IMPORTANT,
  });

  const someData = new DataAsset(model, "Some Data Asset", {
    description: "Some Description",
    usage: Usage.BUSINESS,
    origin: "Some Origin",
    owner: "Some Owner",
    quantity: Quantity.MANY,
    ciaTriad: new CIATriad({
      confidentiality: Confidentiality.CONFIDENTIAL,
      integrity: Integrity.CRITICAL,
      availability: Availability.OPERATIONAL,
    }),
  });

  const someTrustBoundary = new TrustBoundary(model, "Some Trust Boundary", {
    description: "Some Description",
    type: TrustBoundaryType.NETWORK_DEDICATED_HOSTER,
  });

  const someTechnicalAsset = new TechnicalAsset(model, "Some Technical Asset", {
    trustBoundary: someTrustBoundary,
    description: "Some Description",
    type: TechnicalAssetType.PROCESS,
    usage: Usage.BUSINESS,
    humanUse: false,
    size: Size.COMPONENT,
    technology: Technology.WEB_SERVICE_REST,
    tags: ["some-tag", "some-other-tag"],
    internet: false,
    machine: Machine.VIRTUAL,
    encryption: Encryption.NONE,
    owner: "Some Owner",
    ciaTriad: new CIATriad({
      confidentiality: Confidentiality.CONFIDENTIAL,
      integrity: Integrity.CRITICAL,
      availability: Availability.CRITICAL,
    }),
    multiTenant: false,
    redundant: true,
  });

  someTechnicalAsset.process(someData);

  const someOtherTechnicalAsset = new TechnicalAsset(
    model,
    "Some Other Technical Asset",
    {
      description: "Some Description",
      type: TechnicalAssetType.PROCESS,
      usage: Usage.BUSINESS,
      humanUse: false,
      size: Size.COMPONENT,
      technology: Technology.WEB_SERVICE_REST,
      internet: false,
      machine: Machine.VIRTUAL,
      encryption: Encryption.NONE,
      owner: "Some Owner",
      ciaTriad: new CIATriad({
        confidentiality: Confidentiality.CONFIDENTIAL,
        integrity: Integrity.IMPORTANT,
        availability: Availability.IMPORTANT,
      }),
      multiTenant: false,
      redundant: true,
    }
  );

  someOtherTechnicalAsset.process(someData);

  const someTraffic = someTechnicalAsset.communicateWith(
    "Some Traffic",
    someOtherTechnicalAsset,
    {
      description: "Some Description",
      protocol: Protocol.HTTPS,
      authentication: Authentication.NONE,
      authorization: Authorization.NONE,
      vpn: false,
      ipFiltered: false,
      readonly: false,
      usage: Usage.BUSINESS,
    }
  );

  someTraffic.send(someData);

  const someSharedRuntime = new SharedRuntime(model, "Some Shared Runtime", {
    description: "Some Description",
  });

  someSharedRuntime.run(someTechnicalAsset, someOtherTechnicalAsset);

  const riskCategory = new RiskCategory(model, "Some Individual Risk Example", {
    description: "Some text describing the risk category...",
    impact: "Some text describing the impact...",
    asvs: "V0 - Something Strange",
    cheatSheat: "https://example.com",
    action: "Some text describing the action...",
    mitigation: "Some text describing the mitigation...",
    check: "Check if XYZ...",
    function: RiskFunction.BUSINESS_SIDE,
    stride: Stride.REPUDIATION,
    detectionLogic: "Some text describing the detection logic...",
    riskAssessment: "Some text describing the risk assessment...",
    falsePositives:
      "Some text describing the most common types of false positives...",
    modelFailurePossibleReason: false,
    cwe: 693,
  });

  riskCategory.identifiedAtTechnicalAsset(someTechnicalAsset, {
    severity: Severity.CRITICAL,
    exploitationLikelihood: ExploitationLikelihood.LIKELY,
    exploitationImpact: ExploitationImpact.MEDIUM,
    dataBreachProbability: DataBreachProbability.PROBABLE,
    dataBreachTechnicalAssets: [someTechnicalAsset],
  });

  project.synth();
});
