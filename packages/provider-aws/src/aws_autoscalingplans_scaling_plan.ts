import { TerraformConfig, TerraformResource } from "tfs";
export interface TagFilter {
  key: string;
  values?: string[];
}
export interface ApplicationSource {
  cloudformation_stack_arn?: string;
  tag_filter: TagFilter;
}
export interface CustomizedLoadMetricSpecification {
  dimensions?: {
    [key: string]: string;
  };
  metric_name: string;
  namespace: string;
  statistic: string;
  unit?: string;
}
export interface PredefinedLoadMetricSpecification {
  predefined_load_metric_type: string;
  resource_label?: string;
}
export interface CustomizedScalingMetricSpecification {
  dimensions?: {
    [key: string]: string;
  };
  metric_name: string;
  namespace: string;
  statistic: string;
  unit?: string;
}
export interface PredefinedScalingMetricSpecification {
  predefined_scaling_metric_type: string;
  resource_label?: string;
}
export interface TargetTrackingConfiguration {
  disable_scale_in?: boolean;
  estimated_instance_warmup?: number;
  scale_in_cooldown?: number;
  scale_out_cooldown?: number;
  target_value: number;
  customized_scaling_metric_specification: CustomizedScalingMetricSpecification;
  predefined_scaling_metric_specification: PredefinedScalingMetricSpecification;
}
export interface ScalingInstruction {
  disable_dynamic_scaling?: boolean;
  max_capacity: number;
  min_capacity: number;
  predictive_scaling_max_capacity_behavior?: string;
  predictive_scaling_mode?: string;
  resource_id: string;
  scalable_dimension: string;
  scaling_policy_update_behavior?: string;
  scheduled_action_buffer_time?: number;
  service_namespace: string;
  customized_load_metric_specification: CustomizedLoadMetricSpecification;
  predefined_load_metric_specification: PredefinedLoadMetricSpecification;
  target_tracking_configuration: TargetTrackingConfiguration;
}
export interface AwsAutoscalingplansScalingPlanArgs {
  name: string;
  application_source: ApplicationSource;
  scaling_instruction: ScalingInstruction;
}
export class aws_autoscalingplans_scaling_plan extends TerraformResource {
  readonly id?: string;
  readonly scaling_plan_version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingplansScalingPlanArgs) {
    super(config, "resource", args, resourceName, "aws_autoscalingplans_scaling_plan");
  }
}