import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmonitorMonitorArgs {
  monitor_name: string;
  tags?: { [key: string]: string };
}

export class aws_networkmonitor_monitor extends TerraformResource {
  readonly aggregation_period?: number;
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmonitorMonitorArgs) {
    super(config, "resource", args, resourceName, "aws_networkmonitor_monitor");
  }
}
