import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchMetricStreamArgsExcludeFilter {
  metric_names?: string[];
  namespace: string;
}
export interface AwsCloudwatchMetricStreamArgsIncludeFilter {
  metric_names?: string[];
  namespace: string;
}
export interface AwsCloudwatchMetricStreamArgsStatisticsConfigurationIncludeMetric {
  metric_name: string;
  namespace: string;
}
export interface AwsCloudwatchMetricStreamArgsStatisticsConfiguration {
  additional_statistics: string[];
  include_metric: AwsCloudwatchMetricStreamArgsStatisticsConfigurationIncludeMetric;
}
export interface AwsCloudwatchMetricStreamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudwatchMetricStreamArgs {
  firehose_arn: string;
  include_linked_accounts_metrics?: boolean;
  output_format: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  exclude_filter: AwsCloudwatchMetricStreamArgsExcludeFilter;
  include_filter: AwsCloudwatchMetricStreamArgsIncludeFilter;
  statistics_configuration: AwsCloudwatchMetricStreamArgsStatisticsConfiguration;
  timeouts?: AwsCloudwatchMetricStreamArgsTimeouts;
}
export class aws_cloudwatch_metric_stream extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly id?: string;
  readonly last_update_date!: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchMetricStreamArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_metric_stream");
  }
}