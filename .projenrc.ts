import { awscdk } from 'projen';
const { ReleaseTrigger } = require('projen/lib/release');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'alejandro.velez',
  authorAddress: 'avelez@labvel.io',
  buildWorkflow: false,
  cdkVersion: '2.93.0',
  defaultReleaseBranch: 'main',
  github: false,
  jsiiVersion: '~5.0.0',
  name: '@labvel/ecs-fargate-services',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/user/cdkv2_ephemeral_environment_services_construct.git',
  description: 'CDK Construct for custom ecs services',
  python: {
    distName: 'customservice',
    module: 'ecs-fargate--service',
  },
  dotnet: {
    dotNetNamespace: 'CDKCustomServiceLib',
    packageId: 'com.CDKcustomservice.CustomService',
  },
  //publishToMaven: {
  //  javaPackage: 'com.cdkcustomservice.customservice',
  //  mavenArtifactId: 'constructs',
  //  mavenGroupId: 'ecs-fargate-service',
  //},
  majorVersion: 1,
  releaseTrigger: ReleaseTrigger.manual(),
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();