# cdk-threagile (cdktg)
![Build](https://github.com/hupe1980/cdk-threagile/workflows/build/badge.svg)
![Release](https://github.com/hupe1980/cdk-threagile/workflows/release/badge.svg)
> Agile Threat Modeling as Code

CDK Constructs for [threagile](https://threagile.io/)
## Installation
TypeScript/JavaScript:

```bash
npm i cdktg
```

Python:

```bash
pip install cdktg
```

## How to use
Initialize a project:

```bash
mkdir threagile
cd threagile
cdktg init
```

### Threat Model written in typescript:
```typescript
// threagile.ts

const project = new Project();

const model = new Model(project, 'Model Stub', {
    title: 'Model Stub',
    version: '1.0.0',
    date: '2020-03-31',
    author: new Author({
        name: 'John Doe',
    }),
    businessCriticality: BusinessCriticality.IMPORTANT,
});

const someData = new DataAsset(model, 'Some Data Asset', {
    description: 'Some Description',
    usage: Usage.BUSINESS,
    origin: 'Some Origin',
    owner: 'Some Owner',
    quantity: Quantity.MANY,
    ciaTriad: new CIATriad({
        confidentiality: Confidentiality.CONFIDENTIAL,
        integrity: Integrity.CRITICAL,
        availability: Availability.OPERATIONAL,
    }),
});

const someTrustBoundary = new TrustBoundary(model, 'Some Trust Boundary', {
    description: 'Some Description',
    type: TrustBoundaryType.NETWORK_DEDICATED_HOSTER,
});

const someTechnicalAsset = new TechnicalAsset(model, 'Some Technical Asset', {
    trustBoundary: someTrustBoundary,
    description: 'Some Description',
    type: TechnicalAssetType.PROCESS,
    usage: Usage.BUSINESS,
    humanUse: false,
    size: Size.COMPONENT,
    technology: Technology.WEB_SERVICE_REST,
    internet: false,
    machine: Machine.VIRTUAL,
    encryption: Encryption.NONE,
    owner: 'Some Owner',
    ciaTriad: new CIATriad({
        confidentiality: Confidentiality.CONFIDENTIAL,
        integrity: Integrity.CRITICAL,
        availability: Availability.CRITICAL,
    }),
    multiTenant: false,
    redundant: true,
});

someTechnicalAsset.processes(someData);

const someOtherTechnicalAsset = new TechnicalAsset(model, 'Some Other Technical Asset', {
    description: 'Some Description',
    type: TechnicalAssetType.PROCESS,
    usage: Usage.BUSINESS,
    humanUse: false,
    size: Size.COMPONENT,
    technology: Technology.WEB_SERVICE_REST,
    tags: ['some-tag', 'some-other-tag'],
    internet: false,
    machine: Machine.VIRTUAL,
    encryption: Encryption.NONE,
    owner: 'Some Owner',
    ciaTriad: new CIATriad({
        confidentiality: Confidentiality.CONFIDENTIAL,
        integrity: Integrity.IMPORTANT,
        availability: Availability.IMPORTANT,
    }),
    multiTenant: false,
    redundant: true,
});

someOtherTechnicalAsset.processes(someData);

const someTraffic = someTechnicalAsset.communicatesWith('Some Traffic', someOtherTechnicalAsset, {
    description: 'Some Description',
    protocol: Protocol.HTTPS,
    authentication: Authentication.NONE,
    authorization: Authorization.NONE,
    vpn: false,
    ipFiltered: false,
    readonly: false,
    usage: Usage.BUSINESS,
});

someTraffic.sends(someData);

const someSharedRuntime = new SharedRuntime(model, "Some Shared Runtime", {
    description: "Some Description",
});

someSharedRuntime.runs(someTechnicalAsset, someOtherTechnicalAsset);

project.synth();
```

### High level constructs (cdktg/plus*)
```typescript
import { ApplicationLoadBalancer, Cloud } from "cdktg/plus_aws";

// ...

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

// ...
```

### cdktg CLI commands:
A running thragile rest api server is required for the CLI. The URL can be passed by parameter `url` or environment variable `CDKTG_THREAGILE_BASE_URL`.

The examples can be used with the [threagile playground](https://run.threagile.io/)
```sh
cdktg [command]

Commands:
  cdktg init              create a new cdk-threagile project
  cdktg synth <filename>  synthesize the models
  cdktg ping              ping the api
  cdktg check             check the models
  cdktg analyze           analyze the models
  cdktg completion        generate completion script

Options:
  --help     Show help                               [boolean]
  --version  Show version number                     [boolean]
```
### Analyze outputs:
```sh
dist
└── ModelStub
    ├── data-asset-diagram.png
    ├── data-flow-diagram.png
    ├── report.pdf
    ├── risks.json
    ├── risks.xlsx
    ├── stats.json
    ├── tags.xlsx
    ├── technical-assets.json
    └── threagile.yaml
```

## Examples

See more complete [examples](https://github.com/hupe1980/cdk-threagile-examples).
## License

[MIT](LICENSE)