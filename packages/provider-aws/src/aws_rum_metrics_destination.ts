import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRumMetricsDestinationArgs {
  app_monitor_name: string;
  destination: string;
  destination_arn?: string;
  iam_role_arn?: string;
}

export class aws_rum_metrics_destination extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRumMetricsDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_rum_metrics_destination");
  }
}
