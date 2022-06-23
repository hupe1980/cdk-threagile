import * as cdktg from "cdktg";
import { AuthenticationType, StorageType, Vault } from "../src";

test("synth the model stub example", () => {
  const project = new cdktg.Project({
    outdir: "dist",
  });

  const model = new cdktg.Model(project, "Model Stub", {
    version: "1.0.0",
    date: "2020-03-31",
    author: new cdktg.Author({
      name: "John Doe",
    }),
    businessCriticality: cdktg.BusinessCriticality.IMPORTANT,
  });

  new Vault(model, "Vault", {
    vendor: "HashiCorp",
    storageType: StorageType.FILESYSTEM,
    authtenticationType: AuthenticationType.CREDENTIALS,
    multiTenant: false,
  });

  project.synth();
});
