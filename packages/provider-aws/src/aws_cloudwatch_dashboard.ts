import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchDashboardArgs {
  dashboard_body: string;
  dashboard_name: string;
}

export class aws_cloudwatch_dashboard extends TerraformResource {
  readonly dashboard_arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchDashboardArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_dashboard");
  }
}
