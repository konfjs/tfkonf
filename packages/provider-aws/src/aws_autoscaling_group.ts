import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAutoscalingGroupArgsInitialLifecycleHook {
  heartbeat_timeout?: number;
  lifecycle_transition: string;
  name: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;
}
export interface AwsAutoscalingGroupArgsInstanceMaintenancePolicy {
  max_healthy_percentage: number;
  min_healthy_percentage: number;
}
export interface AwsAutoscalingGroupArgsInstanceRefreshpreferencesAlarmSpecification {
  alarms?: string[];
}
export interface AwsAutoscalingGroupArgsInstanceRefreshpreferences {
  auto_rollback?: boolean;
  checkpoint_delay?: string;
  checkpoint_percentages?: number[];
  instance_warmup?: string;
  max_healthy_percentage?: number;
  min_healthy_percentage?: number;
  scale_in_protected_instances?: string;
  skip_matching?: boolean;
  standby_instances?: string;
  alarm_specification: AwsAutoscalingGroupArgsInstanceRefreshpreferencesAlarmSpecification;
}
export interface AwsAutoscalingGroupArgsInstanceRefresh {
  strategy: string;
  triggers?: string[];
  preferences: AwsAutoscalingGroupArgsInstanceRefreshpreferences;
}
export interface AwsAutoscalingGroupArgsLaunchTemplate {}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyInstancesDistribution {
  spot_max_price?: string;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsMemoryMib {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsVcpuCount {
  max?: number;
  min?: number;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirements {
  accelerator_manufacturers?: string[];
  accelerator_names?: string[];
  accelerator_types?: string[];
  allowed_instance_types?: string[];
  bare_metal?: string;
  burstable_performance?: string;
  cpu_manufacturers?: string[];
  excluded_instance_types?: string[];
  instance_generations?: string[];
  local_storage?: string;
  local_storage_types?: string[];
  max_spot_price_as_percentage_of_optimal_on_demand_price?: number;
  on_demand_max_price_percentage_over_lowest_price?: number;
  require_hibernate_support?: boolean;
  spot_max_price_percentage_over_lowest_price?: number;
  accelerator_count: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsMemoryGibPerVcpu;
  memory_mib: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsMemoryMib;
  network_bandwidth_gbps: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsTotalLocalStorageGb;
  vcpu_count: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirementsVcpuCount;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideLaunchTemplateSpecification {}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverride {
  instance_type?: string;
  weighted_capacity?: string;
  instance_requirements: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideInstanceRequirements;
  launch_template_specification: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverrideLaunchTemplateSpecification;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplate {
  launch_template_specification: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
  override: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplateoverride;
}
export interface AwsAutoscalingGroupArgsMixedInstancesPolicy {
  instances_distribution: AwsAutoscalingGroupArgsMixedInstancesPolicyInstancesDistribution;
  launch_template: AwsAutoscalingGroupArgsMixedInstancesPolicyLaunchTemplate;
}
export interface AwsAutoscalingGroupArgstag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}
export interface AwsAutoscalingGroupArgstimeouts {
  delete?: string;
  update?: string;
}
export interface AwsAutoscalingGroupArgsTrafficSource {
  identifier: string;
  type?: string;
}
export interface AwsAutoscalingGroupArgsWarmPoolInstanceReusePolicy {
  reuse_on_scale_in?: boolean;
}
export interface AwsAutoscalingGroupArgsWarmPool {
  max_group_prepared_capacity?: number;
  min_size?: number;
  pool_state?: string;
  instance_reuse_policy: AwsAutoscalingGroupArgsWarmPoolInstanceReusePolicy;
}
export interface AwsAutoscalingGroupArgs {
  capacity_rebalance?: boolean;
  context?: string;
  default_instance_warmup?: number;
  desired_capacity_type?: string;
  enabled_metrics?: string[];
  force_delete?: boolean;
  force_delete_warm_pool?: boolean;
  health_check_grace_period?: number;
  ignore_failed_scaling_activities?: boolean;
  launch_configuration?: string;
  max_instance_lifetime?: number;
  max_size: number;
  metrics_granularity?: string;
  min_elb_capacity?: number;
  min_size: number;
  placement_group?: string;
  protect_from_scale_in?: boolean;
  suspended_processes?: string[];
  termination_policies?: string[];
  wait_for_capacity_timeout?: string;
  wait_for_elb_capacity?: number;
  initial_lifecycle_hook: AwsAutoscalingGroupArgsInitialLifecycleHook;
  instance_maintenance_policy: AwsAutoscalingGroupArgsInstanceMaintenancePolicy;
  instance_refresh: AwsAutoscalingGroupArgsInstanceRefresh;
  launch_template: AwsAutoscalingGroupArgsLaunchTemplate;
  mixed_instances_policy: AwsAutoscalingGroupArgsMixedInstancesPolicy;
  tag: AwsAutoscalingGroupArgstag;
  timeouts: AwsAutoscalingGroupArgstimeouts;
  traffic_source: AwsAutoscalingGroupArgsTrafficSource;
  warm_pool: AwsAutoscalingGroupArgsWarmPool;
}
export class aws_autoscaling_group extends TerraformResource {
  readonly arn!: string;
  readonly availability_zones?: string[];
  readonly default_cooldown?: number;
  readonly desired_capacity?: number;
  readonly health_check_type?: string;
  readonly id?: string;
  readonly load_balancers?: string[];
  readonly name?: string;
  readonly name_prefix?: string;
  readonly predicted_capacity!: number;
  readonly service_linked_role_arn?: string;
  readonly target_group_arns?: string[];
  readonly vpc_zone_identifier?: string[];
  readonly warm_pool_size!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAutoscalingGroupArgs) {
    super(config, "resource", args, resourceName, "aws_autoscaling_group");
  }
}