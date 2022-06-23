const { cdk } = require("projen");

const project = new cdk.JsiiProject({
  author: "hupe1980",
  defaultReleaseBranch: "main",
  name: "cdktg",
  description: "Agile Threat Modeling as Code",
  keywords: ["threagile", "cdk", "threat modeling", "stride"],
  vscode: true,
  repositoryUrl: "https://github.com/hupe1980/cdk-threagile.git",
  license: "MIT",
  copyrightOwner: "Frank Hübner",

  prettier: true,
  depsUpgrade: false,

  peerDeps: ["constructs"],
  bundledDeps: [
    "axios",
    "yaml",
    "yargs",
    "ts-node",
    "execa@^5",
    "fs-extra",
    "form-data",
    "adm-zip",
    "dotenv",
    "which",
  ],
  devDeps: [
    "@types/fs-extra",
    "@types/adm-zip",
    "@types/which",
    "constructs",
    "json-schema-to-typescript",
    "@openapitools/openapi-generator-cli",
  ],

  publishToPypi: {
    distName: "cdktg",
    module: "cdktg",
  },

  publishToGo: {
    moduleName: "github.com/hupe1980/cdk-threagile-go",
  },
});

project.setScript(
  "specgen",
  "json2ts threagile/schema.json > src/spec/threatgile.generated.ts"
);
project.setScript(
  "apigen",
  "openapi-generator-cli generate -i threagile/openapi.yaml -g typescript-axios -o src/api/generated --additional-properties=withNodeImports=true"
);

project.synth();

const awsProject = new cdk.JsiiProject({
  author: "hupe1980",
  defaultReleaseBranch: "main",
  name: "@cdktg/aws",
  parent: project,
  outdir: "packages/@cdktg/aws",
  license: "MIT",
  copyrightOwner: "Frank Hübner",

  prettier: true,

  peerDeps: ["constructs", "cdktg"],

  devDeps: ["constructs", "cdktg"],

  publishToPypi: {
    distName: "cdktg_aws",
    module: "cdktg_aws",
  },

  publishToGo: {
    moduleName: "github.com/hupe1980/cdk-threagile-go",
  },
});

awsProject.synth();
