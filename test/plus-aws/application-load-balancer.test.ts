import {
  Project,
  Model,
  Author,
  BusinessCriticality,
  CIATriad,
  Availability,
  Integrity,
  Confidentiality,
} from "../../src";
import { ApplicationLoadBalancer, Cloud } from "../../src/plus-aws";

test("synth application-load-balancer with default securit-group", () => {
  const project = new Project({
    outdir: "dist/aws",
  });

  const model = new Model(project, "Model Stub", {
    version: "1.0.0",
    date: "2020-03-31",
    author: new Author({
      name: "John Doe",
    }),
    businessCriticality: BusinessCriticality.IMPORTANT,
  });

  const alb = new ApplicationLoadBalancer(model, "ALB", {
    waf: true,
    ciaTriad: new CIATriad({
      availability: Availability.CRITICAL,
      integrity: Integrity.IMPORTANT,
      confidentiality: Confidentiality.CONFIDENTIAL,
    }),
  });

  const cloud = new Cloud(model, "AWS-Cloud");

  cloud.addTechnicalAssets(alb);

  project.synth();
});
