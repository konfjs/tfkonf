import { TerraformConfig, TerraformResource } from "tfs";
export interface EbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
}
export interface EphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}
export interface RootBlockDevice {
  delete_on_termination?: boolean;
}
export interface LaunchSpecification {
  ami: string;
  associate_public_ip_address?: boolean;
  ebs_optimized?: boolean;
  iam_instance_profile?: string;
  iam_instance_profile_arn?: string;
  instance_type: string;
  monitoring?: boolean;
  placement_tenancy?: string;
  spot_price?: string;
  tags?: {
    [key: string]: string;
  };
  user_data?: string;
  weighted_capacity?: string;
  ebs_block_device: EbsBlockDevice;
  ephemeral_block_device: EphemeralBlockDevice;
  root_block_device: RootBlockDevice;
}
export interface LaunchTemplateSpecification {
  id?: string;
  name?: string;
  version?: string;
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
export interface Overrides {
  availability_zone?: string;
  instance_type?: string;
  instance_requirements: InstanceRequirements;
}
export interface LaunchTemplateConfig {
  launch_template_specification: LaunchTemplateSpecification;
  overrides: Overrides;
}
export interface CapacityRebalance {
  replacement_strategy?: string;
}
export interface SpotMaintenanceStrategies {
  capacity_rebalance: CapacityRebalance;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSpotFleetRequestArgs {
  allocation_strategy?: string;
  context?: string;
  excess_capacity_termination_policy?: string;
  fleet_type?: string;
  iam_fleet_role: string;
  instance_interruption_behaviour?: string;
  instance_pools_to_use_count?: number;
  on_demand_allocation_strategy?: string;
  on_demand_max_total_price?: string;
  on_demand_target_capacity?: number;
  replace_unhealthy_instances?: boolean;
  spot_price?: string;
  tags?: {
    [key: string]: string;
  };
  target_capacity: number;
  target_capacity_unit_type?: string;
  terminate_instances_on_delete?: string;
  terminate_instances_with_expiration?: boolean;
  valid_from?: string;
  valid_until?: string;
  wait_for_fulfillment?: boolean;
  launch_specification: LaunchSpecification;
  launch_template_config: LaunchTemplateConfig;
  spot_maintenance_strategies: SpotMaintenanceStrategies;
  timeouts: Timeouts;
}
export class aws_spot_fleet_request extends TerraformResource {
  readonly client_token!: string;
  readonly id?: string;
  readonly load_balancers?: string[];
  readonly spot_request_state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly target_group_arns?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsSpotFleetRequestArgs) {
    super(config, "resource", args, resourceName, "aws_spot_fleet_request");
  }
}