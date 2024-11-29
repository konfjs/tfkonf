import { TerraformConfig, TerraformResource } from "tfs";
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
export interface MetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat: MetricStat;
}
export interface CustomizedCapacityMetricSpecification {
  metric_data_queries: MetricDataQueries;
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
export interface MetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat: MetricStat;
}
export interface CustomizedLoadMetricSpecification {
  metric_data_queries: MetricDataQueries;
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
export interface MetricDataQueries {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat: MetricStat;
}
export interface CustomizedScalingMetricSpecification {
  metric_data_queries: MetricDataQueries;
}
export interface PredefinedLoadMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface PredefinedMetricPairSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface PredefinedScalingMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface MetricSpecification {
  target_value: number;
  customized_capacity_metric_specification: CustomizedCapacityMetricSpecification;
  customized_load_metric_specification: CustomizedLoadMetricSpecification;
  customized_scaling_metric_specification: CustomizedScalingMetricSpecification;
  predefined_load_metric_specification: PredefinedLoadMetricSpecification;
  predefined_metric_pair_specification: PredefinedMetricPairSpecification;
  predefined_scaling_metric_specification: PredefinedScalingMetricSpecification;
}
export interface PredictiveScalingConfiguration {
  max_capacity_breach_behavior?: string;
  max_capacity_buffer?: string;
  mode?: string;
  scheduling_buffer_time?: string;
  metric_specification: MetricSpecification;
}
export interface StepAdjustment {
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;
  scaling_adjustment: number;
}
export interface MetricDimension {
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
  metric_dimension: MetricDimension;
  metrics: Metrics;
}
export interface PredefinedMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface TargetTrackingConfiguration {
  disable_scale_in?: boolean;
  target_value: number;
  customized_metric_specification: CustomizedMetricSpecification;
  predefined_metric_specification: PredefinedMetricSpecification;
}
export interface AwsAutoscalingPolicyArgs {
  adjustment_type?: string;
  autoscaling_group_name: string;
  cooldown?: number;
  enabled?: boolean;
  estimated_instance_warmup?: number;
  min_adjustment_magnitude?: number;
  name: string;
  policy_type?: string;
  scaling_adjustment?: number;
  predictive_scaling_configuration: PredictiveScalingConfiguration;
  step_adjustment: StepAdjustment;
  target_tracking_configuration: TargetTrackingConfiguration;
}
export class aws_autoscaling_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly metric_aggregation_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_policy");
  }
}