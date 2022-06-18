const { cdk } = require('projen');

const project = new cdk.JsiiProject({
  author: 'hupe1980',
  defaultReleaseBranch: 'main',
  name: 'cdktg',
  vscode: true,
  repositoryUrl: 'https://github.com:hupe1980/cdk-threagile.git',
  license: 'MIT',
  copyrightOwner: 'Frank Hübner',

  peerDeps: ['constructs'],
  bundledDeps: ['uuid', 'yaml'],
  devDeps: ['constructs', '@types/uuid', 'json-schema-to-typescript'],

  publishToPypi: {
    distName: 'cdktg',
    module: 'cdktg',
  },

  publishToGo: {
    moduleName: 'github.com/hupe1980/cdktg-go',
  },
});

project.setScript('specgen', 'json2ts schema.json > src/spec/threatgile.generated.ts');

project.synth();