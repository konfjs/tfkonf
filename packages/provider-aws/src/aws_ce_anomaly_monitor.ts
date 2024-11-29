import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCeAnomalyMonitorArgs {
  monitor_dimension?: string;
  monitor_specification?: string;
  monitor_type: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_ce_anomaly_monitor extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCeAnomalyMonitorArgs) {
    super(config, "resource", args, resourceName, "aws_ce_anomaly_monitor");
  }
}