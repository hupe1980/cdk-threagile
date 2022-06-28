import { Availability, CIATriad, Confidentiality, Integrity } from "../src";

test("hasHigherConfidentiality", () => {
  const ciaTriad = new CIATriad({
    confidentiality: Confidentiality.INTERNAL,
    availability: Availability.CRITICAL,
    integrity: Integrity.IMPORTANT,
  });

  expect(ciaTriad.hasHigherConfidentiality(Confidentiality.PUBLIC)).toBe(true);
  expect(ciaTriad.hasHigherConfidentiality(Confidentiality.INTERNAL)).toBe(
    false
  );
  expect(
    ciaTriad.hasHigherConfidentiality(Confidentiality.STRICTLY_CONFIDENTIAL)
  ).toBe(false);
});

test("hasHigherIntegrity", () => {
  const ciaTriad = new CIATriad({
    confidentiality: Confidentiality.INTERNAL,
    availability: Availability.CRITICAL,
    integrity: Integrity.IMPORTANT,
  });

  expect(ciaTriad.hasHigherIntegrity(Integrity.ARCHIVE)).toBe(true);
  expect(ciaTriad.hasHigherIntegrity(Integrity.IMPORTANT)).toBe(false);
  expect(ciaTriad.hasHigherIntegrity(Integrity.MISSION_CRITICAL)).toBe(false);
});

test("hasHigherAvailabilty", () => {
  const ciaTriad = new CIATriad({
    confidentiality: Confidentiality.INTERNAL,
    availability: Availability.CRITICAL,
    integrity: Integrity.IMPORTANT,
  });

  expect(ciaTriad.hasHigherAvailabilty(Availability.OPERATIONAL)).toBe(true);
  expect(ciaTriad.hasHigherAvailabilty(Availability.CRITICAL)).toBe(false);
  expect(ciaTriad.hasHigherAvailabilty(Availability.MISSION_CRITICAL)).toBe(
    false
  );
});
