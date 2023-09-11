import { StackProps, Fn } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as alb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export interface ImportServiceProps extends StackProps {

  readonly vpcId: string;
  readonly parentEnv: string;
  readonly environmentOutputs: { [index: string]: any };

}

export class ImportResources extends Construct {

  /**
         * @attribute
         */
  readonly importedCluster: ecs.ICluster;
  /**
        * @attribute
        */
  readonly importedAlb: alb.IApplicationLoadBalancer;

  constructor(scope: Construct, id: string, props: ImportServiceProps) {
    super(scope, id);


    const importedVpc = ec2.Vpc.fromLookup(this, 'VPCImport', {
      vpcId: props.vpcId,
    });

    // Import Cluster
    this.importedCluster = ecs.Cluster.fromClusterAttributes(
      this,
      'ClusterImport',
      {
        clusterName: Fn.importValue( `ECSClusterName-${props.parentEnv}`), //environmentOutputs.outputs.ECSClusterName, //
        vpc: importedVpc,
        securityGroups: JSON.parse(
          props.environmentOutputs.outputs.ECSClusterSecGrps,
        ),
      },
    );

    // Import Load Balancer
    this.importedAlb = alb.ApplicationLoadBalancer.fromApplicationLoadBalancerAttributes(this, 'ALB', {
      vpc: importedVpc,
      loadBalancerDnsName: Fn.importValue(`LBDNSName-${props.parentEnv}`),
      loadBalancerArn: Fn.importValue(`ARNALB-${props.parentEnv}`),
      securityGroupId: Fn.importValue(`SGALB-${props.parentEnv}`),

    },
    );
  }
}


