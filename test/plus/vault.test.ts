import {
  Authentication,
  Project,
  Model,
  Author,
  BusinessCriticality,
} from "../../src/";
import { StorageType, Vault } from "../../src/plus";

test("synth the model stub example", () => {
  const project = new Project({
    outdir: "dist/plus",
  });

  const model = new Model(project, "Model Stub", {
    version: "1.0.0",
    date: "2020-03-31",
    author: new Author({
      name: "John Doe",
    }),
    businessCriticality: BusinessCriticality.IMPORTANT,
  });

  new Vault(model, "Vault", {
    vendor: "HashiCorp",
    storageType: StorageType.FILESYSTEM,
    authtentication: Authentication.CREDENTIALS,
    multiTenant: false,
  });

  project.synth();
});
