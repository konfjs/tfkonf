import { TerraformConfig, TerraformResource } from "tfs";
export interface StepAdjustment {
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;
  scaling_adjustment: number;
}
export interface StepScalingPolicyConfiguration {
  adjustment_type?: string;
  cooldown?: number;
  metric_aggregation_type?: string;
  min_adjustment_magnitude?: number;
  step_adjustment: StepAdjustment;
}
export interface Dimensions {
  name: string;
  value: string;
}
export interface Dimensions {
  name: string;
  value: string;
}
export interface Metric {
  metric_name: string;
  namespace: string;
  dimensions: Dimensions;
}
export interface MetricStat {
  stat: string;
  unit?: string;
  metric: Metric;
}
export interface Metrics {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat: MetricStat;
}
export interface CustomizedMetricSpecification {
  metric_name?: string;
  namespace?: string;
  statistic?: string;
  unit?: string;
  dimensions: Dimensions;
  metrics: Metrics;
}
export interface PredefinedMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface TargetTrackingScalingPolicyConfiguration {
  disable_scale_in?: boolean;
  scale_in_cooldown?: number;
  scale_out_cooldown?: number;
  target_value: number;
  customized_metric_specification: CustomizedMetricSpecification;
  predefined_metric_specification: PredefinedMetricSpecification;
}
export interface AwsAppautoscalingPolicyArgs {
  name: string;
  policy_type?: string;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  step_scaling_policy_configuration: StepScalingPolicyConfiguration;
  target_tracking_scaling_policy_configuration: TargetTrackingScalingPolicyConfiguration;
}
export class aws_appautoscaling_policy extends TerraformResource {
  readonly alarm_arns!: string[];
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppautoscalingPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_appautoscaling_policy");
  }
}