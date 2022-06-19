# cdk-threagile
![Build](https://github.com/hupe1980/cdk-threagile/workflows/build/badge.svg)
![Release](https://github.com/hupe1980/cdk-threagile/workflows/release/badge.svg)
> Agile Threat Modeling as Code

CDK Constructs for [threatgile](https://threagile.io/)
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
```typescript
const project = new Project({
    outdir: 'dist',
});

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

someTechnicalAsset.process(someData);

const someOtherTechnicalAsset = new TechnicalAsset(model, 'Some Other Technical Asset', {
    description: 'Some Description',
    type: TechnicalAssetType.PROCESS,
    usage: Usage.BUSINESS,
    humanUse: false,
    size: Size.COMPONENT,
    technology: Technology.WEB_SERVICE_REST,
    tags: ["some-tag", "some-other-tag"],
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

someOtherTechnicalAsset.process(someData);

const someTraffic = someTechnicalAsset.communicateWith('Some Traffic', someOtherTechnicalAsset, {
    description: 'Some Description',
    protocol: Protocol.HTTPS,
    authentication: Authentication.NONE,
    authorization: Authorization.NONE,
    vpn: false,
    ipFiltered: false,
    readonly: false,
    usage: Usage.BUSINESS,
});

someTraffic.send(someData);

const someSharedRuntime = new SharedRuntime(model, "Some Shared Runtime", {
    description: "Some Description",
});

someSharedRuntime.run(someTechnicalAsset, someOtherTechnicalAsset);

project.synth();
```

```output
cdktg [command]

Commands:
  cdktg synth <filename>  synthesize the models
  cdktg ping              ping the api
  cdktg check             check the models
  cdktg analyse           analyze the models
  cdktg completion        generate completion script

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

## Example

See more complete [examples](https://github.com/hupe1980/cdk-threagile-examples).
## License

[MIT](LICENSE)