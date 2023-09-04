import {  StackProps,Fn } from "aws-cdk-lib";
import { Construct } from 'constructs';
//import input from "../environment-properties.json";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecsPatterns from "aws-cdk-lib/aws-ecs-patterns";
import * as serviceDiscovery from "aws-cdk-lib/aws-servicediscovery";
import { ImportResources } from "./import_services";


export interface EcsCustomServiceProps extends StackProps {
  
    readonly  listenerPort: number;
    readonly containerPort: number;
    readonly public: boolean;
    readonly  parentEnv: string;
    readonly instanceInputs: { [index: string]: any };
    readonly environmentOutputs: { [index: string]: any };

  }

export class Cdkv2EphemeralEnvironmentServices extends Construct {
  /**
   * @attribute
   */
 
  public readonly importedResources?: ImportResources;
  
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
    if (props.environmentOutputs.outputs.VPCId != "Null") {

      this.importedResources = new ImportResources(this, "ImportResources", 
              { VPCId: props.environmentOutputs.outputs.VPCId, 
            parentEnv: props.parentEnv,
              environmentOutputs: props.environmentOutputs  
            }
      )
       
    }
  
    // Service Specifications
    const envVarMap: { [index: string]: string } = {};
    const nameSpace= serviceDiscovery.PrivateDnsNamespace.fromPrivateDnsNamespaceAttributes(this, "NameSpace",
     {
       namespaceArn: Fn.importValue(`CloudMapNamespaceArn-${props.parentEnv}`),
       namespaceId:Fn.importValue(`CloudMapNamespaceId-${props.parentEnv}`) ,
       namespaceName: Fn.importValue(`CloudMapNamespaceName-${props.parentEnv}`)
      });

    const loadBalancedEcsService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      cluster: this.importedResources?.importedCluster,
      assignPublicIp: true,
      loadBalancer: this.importedResources?.importedAlb,
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
