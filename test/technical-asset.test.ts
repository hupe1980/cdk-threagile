import {
  TechnicalAsset,
  Testing,
  CIATriad,
  TechnicalAssetType,
  Usage,
  Size,
  Model,
  Technology,
  Machine,
  Encryption,
  Confidentiality,
  Availability,
  Integrity,
  DataAsset,
  Quantity,
} from "../src";

describe("highest availability", () => {
  let model: Model;
  let technicalAsset: TechnicalAsset;

  beforeEach(() => {
    model = Testing.model();

    technicalAsset = new TechnicalAsset(model, "Some Technical Asset", {
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
        availability: Availability.IMPORTANT,
      }),
      multiTenant: false,
      redundant: true,
    });
  });

  test("without data asset", () => {
    expect(technicalAsset.highestAvailability).toBe(
      technicalAsset.ciaTriad.availability
    );
  });

  test("with critical data asset processed", () => {
    const expected = Availability.CRITICAL;

    technicalAsset.processes(
      new DataAsset(model, "Data Asset Processed", {
        usage: Usage.BUSINESS,
        quantity: Quantity.MANY,
        ciaTriad: new CIATriad({
          availability: expected,
          integrity: Integrity.IMPORTANT,
          confidentiality: Confidentiality.RESTRICTED,
        }),
      })
    );

    expect(technicalAsset.highestAvailability).toBe(expected);
  });

  test("with mission critical data asset stored", () => {
    const expected = Availability.MISSION_CRITICAL;

    technicalAsset.processes(
      new DataAsset(model, "Data Asset Processed", {
        usage: Usage.BUSINESS,
        quantity: Quantity.MANY,
        ciaTriad: new CIATriad({
          availability: Availability.CRITICAL,
          integrity: Integrity.IMPORTANT,
          confidentiality: Confidentiality.RESTRICTED,
        }),
      })
    );

    technicalAsset.stores(
      new DataAsset(model, "Data Asset Stored", {
        usage: Usage.BUSINESS,
        quantity: Quantity.MANY,
        ciaTriad: new CIATriad({
          availability: expected,
          integrity: Integrity.IMPORTANT,
          confidentiality: Confidentiality.RESTRICTED,
        }),
      })
    );

    expect(technicalAsset.highestAvailability).toBe(expected);
  });
});
