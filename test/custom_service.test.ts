import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Cdkv2EphemeralEnvironmentServices } from "../src/custom_service";
import {env} from "process";


const deploymentEnv = {
  account: env.CDK_DEPLOY_ACCOUNT ?? env.CDK_DEFAULT_ACCOUNT,  //,
  region: env.CDK_DEPLOY_REGION ?? env.CDK_DEFAULT_REGION, //
};
console.log(deploymentEnv)



test('StackUnitTest', () => {
  const stack = new cdk.Stack();
  // when
  new Cdkv2EphemeralEnvironmentServices(stack, 'CustomService', {
    stackName: 'CustomService',
    env: deploymentEnv,
    listenerPort: 80,
    containerPort: 80,
    public: true,
    parentEnv: "parentEnv",
    instanceInputs: {"inputs": {
      "alb_port": 3000,
      "port": 3000,
      "desired_count": 1,
      "task_size": "small",
      "image": "public.ecr.aws/aws-containers/ecsdemo-frontend:776fd50",
      "load_balanced": true,
      "load_balanced_public": true,
      "service_discovery_name": "test"
     
    }},
    environmentOutputs: { "outputs": {
      "ParentEnv": "cdk-ecs-env-demo",
      "ECSClusterSecGrps": "[]",
      "VPCId": "Null",
      "ECSClusterSDNamespace": "ecs-cdk-demo.dev"
    } }
  })
// THEN
const template = Template.fromStack(stack);
template.resourceCountIs('AWS::ECS::TaskDefinition', 1);
});