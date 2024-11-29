import { TerraformConfig, TerraformResource } from "tfs";
export interface InitialLifecycleHook {
  heartbeat_timeout?: number;
  lifecycle_transition: string;
  name: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;
}
export interface InstanceMaintenancePolicy {
  max_healthy_percentage: number;
  min_healthy_percentage: number;
}
export interface AlarmSpecification {
  alarms?: string[];
}
export interface Preferences {
  auto_rollback?: boolean;
  checkpoint_delay?: string;
  checkpoint_percentages?: number[];
  instance_warmup?: string;
  max_healthy_percentage?: number;
  min_healthy_percentage?: number;
  scale_in_protected_instances?: string;
  skip_matching?: boolean;
  standby_instances?: string;
  alarm_specification: AlarmSpecification;
}
export interface InstanceRefresh {
  strategy: string;
  triggers?: string[];
  preferences: Preferences;
}
export interface LaunchTemplate {}
export interface InstancesDistribution {
  spot_max_price?: string;
}
export interface LaunchTemplateSpecification {}
export interface AcceleratorCount {
  max?: number;
  min?: number;
}
export interface AcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}
export interface BaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}
export interface MemoryGibPerVcpu {
  max?: number;
  min?: number;
}
export interface MemoryMib {
  max?: number;
  min?: number;
}
export interface NetworkBandwidthGbps {
  max?: number;
  min?: number;
}
export interface NetworkInterfaceCount {
  max?: number;
  min?: number;
}
export interface TotalLocalStorageGb {
  max?: number;
  min?: number;
}
export interface VcpuCount {
  max?: number;
  min?: number;
}
export interface InstanceRequirements {
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
  accelerator_count: AcceleratorCount;
  accelerator_total_memory_mib: AcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps: BaselineEbsBandwidthMbps;
  memory_gib_per_vcpu: MemoryGibPerVcpu;
  memory_mib: MemoryMib;
  network_bandwidth_gbps: NetworkBandwidthGbps;
  network_interface_count: NetworkInterfaceCount;
  total_local_storage_gb: TotalLocalStorageGb;
  vcpu_count: VcpuCount;
}
export interface LaunchTemplateSpecification {}
export interface Override {
  instance_type?: string;
  weighted_capacity?: string;
  instance_requirements: InstanceRequirements;
  launch_template_specification: LaunchTemplateSpecification;
}
export interface LaunchTemplate {
  launch_template_specification: LaunchTemplateSpecification;
  override: Override;
}
export interface MixedInstancesPolicy {
  instances_distribution: InstancesDistribution;
  launch_template: LaunchTemplate;
}
export interface Tag {
  key: string;
  propagate_at_launch: boolean;
  value: string;
}
export interface Timeouts {
  delete?: string;
  update?: string;
}
export interface TrafficSource {
  identifier: string;
  type?: string;
}
export interface InstanceReusePolicy {
  reuse_on_scale_in?: boolean;
}
export interface WarmPool {
  max_group_prepared_capacity?: number;
  min_size?: number;
  pool_state?: string;
  instance_reuse_policy: InstanceReusePolicy;
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
  initial_lifecycle_hook: InitialLifecycleHook;
  instance_maintenance_policy: InstanceMaintenancePolicy;
  instance_refresh: InstanceRefresh;
  launch_template: LaunchTemplate;
  mixed_instances_policy: MixedInstancesPolicy;
  tag: Tag;
  timeouts: Timeouts;
  traffic_source: TrafficSource;
  warm_pool: WarmPool;
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