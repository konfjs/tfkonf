import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53recoverycontrolconfigClusterArgs {
  name: string;
}
export class aws_route53recoverycontrolconfig_cluster extends TerraformResource {
  readonly arn!: string;
  readonly cluster_endpoints!: any[];
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigClusterArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoverycontrolconfig_cluster");
  }
}