import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigControlPanelArgs {
  cluster_arn: string;
  name: string;
}

export class aws_route53recoverycontrolconfig_control_panel extends TerraformResource {
  readonly arn!: string;
  readonly default_control_panel!: boolean;
  readonly id?: string;
  readonly routing_control_count!: number;
  readonly status!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigControlPanelArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoverycontrolconfig_control_panel");
  }
}
