import { TerraformConfig, TerraformResource } from "tfs";
export interface ExcludeFilter {
  metric_names?: string[];
  namespace: string;
}
export interface IncludeFilter {
  metric_names?: string[];
  namespace: string;
}
export interface IncludeMetric {
  metric_name: string;
  namespace: string;
}
export interface StatisticsConfiguration {
  additional_statistics: string[];
  include_metric: IncludeMetric;
}
export interface Timeouts {
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
  exclude_filter: ExcludeFilter;
  include_filter: IncludeFilter;
  statistics_configuration: StatisticsConfiguration;
  timeouts: Timeouts;
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