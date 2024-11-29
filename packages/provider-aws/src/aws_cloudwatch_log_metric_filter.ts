import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchLogMetricFilterArgsMetricTransformation {
  default_value?: string;
  dimensions?: {
    [key: string]: string;
  };
  name: string;
  namespace: string;
  unit?: string;
  value: string;
}
export interface AwsCloudwatchLogMetricFilterArgs {
  log_group_name: string;
  name: string;
  pattern: string;
  metric_transformation: AwsCloudwatchLogMetricFilterArgsMetricTransformation;
}
export class aws_cloudwatch_log_metric_filter extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogMetricFilterArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_metric_filter");
  }
}