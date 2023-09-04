import {  StackProps,Fn } from "aws-cdk-lib";
import { Construct } from 'constructs';
//import input from "../environment-properties.json";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecsPatterns from "aws-cdk-lib/aws-ecs-patterns";
import * as serviceDiscovery from "aws-cdk-lib/aws-servicediscovery";
import * as alb from "aws-cdk-lib/aws-elasticloadbalancingv2";

export interface EcsCustomServiceProps extends StackProps {
    //readonly  stackName: string ;
    //readonly vpcId: string;
    readonly  listenerPort: number;
    readonly containerPort: number;
    readonly public: boolean;
    readonly  parentEnv: string;
    readonly instanceInputs: { [index: string]: any };
    readonly environmentOutputs: { [index: string]: any };

  }

export class Cdkv2EphemeralEnvironmentServices extends Construct {
  constructor(scope: Construct, id: string, props: EcsCustomServiceProps) {
    super(scope, id);

   const taskSize = setTaskSize();

    function setTaskSize() {
      if (props.instanceInputs.inputs.task_size === "x-small") {
        return {
          cpu: 256,
          memory: 512,
        };
      } else if (props.instanceInputs.inputs.task_size === "small") {
        return {
          cpu: 512,
          memory: 1024,
        };
      } else if (props.instanceInputs.inputs.task_size === "medium") {
        return {
          cpu: 1024,
          memory: 2048,
        };
      } else if (props.instanceInputs.inputs.task_size === "large") {
        return {
          cpu: 2048,
          memory: 4096,
        };
      } else if (props.instanceInputs.inputs.task_size === "x-large") {
        return {
          cpu: 4096,
          memory: 8192,
        };
      } else {
        return {
          cpu: 256,
          memory: 512,
        };
      }
    }

    // Import VPC
    const importedVpc = ec2.Vpc.fromLookup(this, "VPCImport", {
      vpcId: props.environmentOutputs.outputs.VPCId,
    });
    

    const importedCluster = ecs.Cluster.fromClusterAttributes(
      this,
      "ClusterImport",
      {
        clusterName: Fn.importValue( `ECSClusterName-${props.parentEnv}`),//environmentOutputs.outputs.ECSClusterName, // 
        vpc: importedVpc,
        securityGroups: JSON.parse(
            props.environmentOutputs.outputs.ECSClusterSecGrps
        ),
      }
    );

    const importLoadBalancer = alb.ApplicationLoadBalancer.fromApplicationLoadBalancerAttributes(this, "ALB", {
          vpc: importedVpc,
          loadBalancerDnsName:  Fn.importValue(`LBDNSName-${props.parentEnv}`),
          loadBalancerArn: Fn.importValue(`ARNALB-${props.parentEnv}`),
          securityGroupId: Fn.importValue(`SGALB-${props.parentEnv}`),

    }
    );
    // Service Specifications
    const envVarMap: { [index: string]: string } = {};
    const nameSpace= serviceDiscovery.PrivateDnsNamespace.fromPrivateDnsNamespaceAttributes(this, "NameSpace",
     {
       namespaceArn: Fn.importValue(`CloudMapNamespaceArn-${props.parentEnv}`),
       namespaceId:Fn.importValue(`CloudMapNamespaceId-${props.parentEnv}`) ,
       namespaceName: Fn.importValue(`CloudMapNamespaceName-${props.parentEnv}`)
      });

    const loadBalancedEcsService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      cluster: importedCluster,
      assignPublicIp: true,
      loadBalancer: importLoadBalancer,
      memoryLimitMiB: taskSize.memory,
      serviceName: props.instanceInputs.inputs.name,
      listenerPort: props.instanceInputs.inputs.alb_port,
      
      cpu: taskSize.cpu,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry(props.instanceInputs.inputs.image),
        enableLogging: true,
        containerPort: props.instanceInputs.inputs.port,
        //logDriver: ecs.LogDriver.awsLogs(),
      
        environment: envVarMap,
        
      },
      desiredCount: props.instanceInputs.inputs.desired_count,
      
  }
    )
    loadBalancedEcsService.service.enableServiceConnect({namespace: nameSpace.namespaceName, 
       //services: [{
        // portMappingName: instanceInputs.inputs.name,
         //dnsName: instanceInputs.inputs.name,
         //port: 80, // Internal port for service connection
   //  }
   //]
  })

    
}

  
}
