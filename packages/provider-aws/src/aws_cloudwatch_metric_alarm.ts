import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchMetricAlarmArgsMetricQueryMetric {
  dimensions?: { [key: string]: string };
  metric_name: string;
  namespace?: string;
  period: number;
  stat: string;
  unit?: string;
}

export interface AwsCloudwatchMetricAlarmArgsMetricQuery {
  account_id?: string;
  expression?: string;
  id: string;
  label?: string;
  period?: number;
  return_data?: boolean;
  metric: AwsCloudwatchMetricAlarmArgsMetricQueryMetric;
}

export interface AwsCloudwatchMetricAlarmArgs {
  actions_enabled?: boolean;
  alarm_actions?: string[];
  alarm_description?: string;
  alarm_name: string;
  comparison_operator: string;
  datapoints_to_alarm?: number;
  dimensions?: { [key: string]: string };
  evaluation_periods: number;
  extended_statistic?: string;
  insufficient_data_actions?: string[];
  metric_name?: string;
  namespace?: string;
  ok_actions?: string[];
  period?: number;
  statistic?: string;
  tags?: { [key: string]: string };
  threshold?: number;
  threshold_metric_id?: string;
  treat_missing_data?: string;
  unit?: string;
  metric_query: AwsCloudwatchMetricAlarmArgsMetricQuery;
}

export class aws_cloudwatch_metric_alarm extends TerraformResource {
  readonly arn!: string;
  readonly evaluate_low_sample_count_percentiles?: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchMetricAlarmArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_metric_alarm");
  }
}
