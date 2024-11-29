import { TerraformConfig, TerraformResource } from "tfs";
export interface FleetInstanceSet {}
export interface LaunchTemplateSpecification {
  launch_template_id?: string;
  launch_template_name?: string;
  version: string;
}
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
  min: number;
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
  min: number;
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
export interface Override {
  availability_zone?: string;
  instance_type?: string;
  max_price?: string;
  priority?: number;
  subnet_id?: string;
  weighted_capacity?: number;
  instance_requirements: InstanceRequirements;
}
export interface LaunchTemplateConfig {
  launch_template_specification: LaunchTemplateSpecification;
  override: Override;
}
export interface CapacityReservationOptions {
  usage_strategy?: string;
}
export interface OnDemandOptions {
  allocation_strategy?: string;
  max_total_price?: string;
  min_target_capacity?: number;
  single_availability_zone?: boolean;
  single_instance_type?: boolean;
  capacity_reservation_options: CapacityReservationOptions;
}
export interface CapacityRebalance {
  replacement_strategy?: string;
  termination_delay?: number;
}
export interface MaintenanceStrategies {
  capacity_rebalance: CapacityRebalance;
}
export interface SpotOptions {
  allocation_strategy?: string;
  instance_interruption_behavior?: string;
  instance_pools_to_use_count?: number;
  maintenance_strategies: MaintenanceStrategies;
}
export interface TargetCapacitySpecification {
  default_target_capacity_type: string;
  on_demand_target_capacity?: number;
  spot_target_capacity?: number;
  target_capacity_unit_type?: string;
  total_target_capacity: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2FleetArgs {
  context?: string;
  excess_capacity_termination_policy?: string;
  replace_unhealthy_instances?: boolean;
  tags?: {
    [key: string]: string;
  };
  terminate_instances?: boolean;
  terminate_instances_with_expiration?: boolean;
  type?: string;
  valid_from?: string;
  valid_until?: string;
  fleet_instance_set: FleetInstanceSet;
  launch_template_config: LaunchTemplateConfig;
  on_demand_options: OnDemandOptions;
  spot_options: SpotOptions;
  target_capacity_specification: TargetCapacitySpecification;
  timeouts: Timeouts;
}
export class aws_ec2_fleet extends TerraformResource {
  readonly arn!: string;
  readonly fleet_state?: string;
  readonly fulfilled_capacity?: number;
  readonly fulfilled_on_demand_capacity?: number;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2FleetArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_fleet");
  }
}