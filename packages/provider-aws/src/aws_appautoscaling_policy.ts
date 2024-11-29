import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationStepAdjustment {
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;
  scaling_adjustment: number;
}
export interface AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration {
  adjustment_type?: string;
  cooldown?: number;
  metric_aggregation_type?: string;
  min_adjustment_magnitude?: number;
  step_adjustment: AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationStepAdjustment;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationdimensions {
  name: string;
  value: string;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStatmetricdimensions {
  name: string;
  value: string;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStatmetric {
  metric_name: string;
  namespace: string;
  dimensions: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStatmetricdimensions;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStat {
  stat: string;
  unit?: string;
  metric: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStatmetric;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetrics {
  expression?: string;
  id: string;
  label?: string;
  return_data?: boolean;
  metric_stat: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetricsMetricStat;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  metric_name?: string;
  namespace?: string;
  statistic?: string;
  unit?: string;
  dimensions: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationdimensions;
  metrics: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationmetrics;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  predefined_metric_type: string;
  resource_label?: string;
}
export interface AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration {
  disable_scale_in?: boolean;
  scale_in_cooldown?: number;
  scale_out_cooldown?: number;
  target_value: number;
  customized_metric_specification: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
  predefined_metric_specification: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}
export interface AwsAppautoscalingPolicyArgs {
  name: string;
  policy_type?: string;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  step_scaling_policy_configuration: AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration;
  target_tracking_scaling_policy_configuration: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration;
}
export class aws_appautoscaling_policy extends TerraformResource {
  readonly alarm_arns!: string[];
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppautoscalingPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_appautoscaling_policy");
  }
}