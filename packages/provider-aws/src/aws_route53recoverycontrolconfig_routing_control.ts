import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRoute53recoverycontrolconfigRoutingControlArgs {
  cluster_arn: string;
  name: string;
}
export class aws_route53recoverycontrolconfig_routing_control extends TerraformResource {
  readonly arn!: string;
  readonly control_panel_arn?: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigRoutingControlArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoverycontrolconfig_routing_control");
  }
}