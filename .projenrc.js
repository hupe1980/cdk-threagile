const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'hupe1980',
  authorAddress: 'frankhuebner1980@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'cdk-threagile',
  repositoryUrl: 'git@github.com:hupe1980/cdk-threagile.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();