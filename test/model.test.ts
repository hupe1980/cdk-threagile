import * as path from 'path';
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
  AssetType,
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
} from '../src';

test('synth the model stub example', () => {
  const project = new Project({
    outdir: path.join('dist', 'models'),
  });

  const model = new Model(project, 'Model Stub', {
    version: '1.0.0',
    date: new Date('2020-03-31'),
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
    assetType: AssetType.PROCESS,
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

  someTechnicalAsset.processed(someData);

  const someOtherTechnicalAsset = new TechnicalAsset(model, 'Some Other Technical Asset', {
    description: 'Some Description',
    assetType: AssetType.PROCESS,
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
      integrity: Integrity.IMPORTANT,
      availability: Availability.IMPORTANT,
    }),
    multiTenant: false,
    redundant: true,
  });

  someOtherTechnicalAsset.processed(someData);

  const someTraffic = someTechnicalAsset.communicatedWith('Some Traffic', someOtherTechnicalAsset, {
    description: 'Some Description',
    protocol: Protocol.HTTPS,
    authentication: Authentication.NONE,
    authorization: Authorization.NONE,
    vpn: false,
    ipFiltered: false,
    readonly: false,
    usage: Usage.BUSINESS,
  });

  someTraffic.sent(someData);

  project.synth();
});