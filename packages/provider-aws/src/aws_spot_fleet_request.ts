import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSpotFleetRequestArgsLaunchSpecificationEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
}
export interface AwsSpotFleetRequestArgsLaunchSpecificationEphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}
export interface AwsSpotFleetRequestArgsLaunchSpecificationRootBlockDevice {
  delete_on_termination?: boolean;
}
export interface AwsSpotFleetRequestArgsLaunchSpecification {
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
  ebs_block_device: AwsSpotFleetRequestArgsLaunchSpecificationEbsBlockDevice;
  ephemeral_block_device: AwsSpotFleetRequestArgsLaunchSpecificationEphemeralBlockDevice;
  root_block_device: AwsSpotFleetRequestArgsLaunchSpecificationRootBlockDevice;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigLaunchTemplateSpecification {
  id?: string;
  name?: string;
  version?: string;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsMemoryMib {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsVcpuCount {
  max?: number;
  min?: number;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirements {
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
  accelerator_count: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsMemoryGibPerVcpu;
  memory_mib: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsMemoryMib;
  network_bandwidth_gbps: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsTotalLocalStorageGb;
  vcpu_count: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirementsVcpuCount;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfigoverrides {
  availability_zone?: string;
  instance_type?: string;
  instance_requirements: AwsSpotFleetRequestArgsLaunchTemplateConfigoverridesInstanceRequirements;
}
export interface AwsSpotFleetRequestArgsLaunchTemplateConfig {
  launch_template_specification: AwsSpotFleetRequestArgsLaunchTemplateConfigLaunchTemplateSpecification;
  overrides: AwsSpotFleetRequestArgsLaunchTemplateConfigoverrides;
}
export interface AwsSpotFleetRequestArgsSpotMaintenanceStrategiesCapacityRebalance {
  replacement_strategy?: string;
}
export interface AwsSpotFleetRequestArgsSpotMaintenanceStrategies {
  capacity_rebalance: AwsSpotFleetRequestArgsSpotMaintenanceStrategiesCapacityRebalance;
}
export interface AwsSpotFleetRequestArgstimeouts {
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
  launch_specification: AwsSpotFleetRequestArgsLaunchSpecification;
  launch_template_config: AwsSpotFleetRequestArgsLaunchTemplateConfig;
  spot_maintenance_strategies: AwsSpotFleetRequestArgsSpotMaintenanceStrategies;
  timeouts: AwsSpotFleetRequestArgstimeouts;
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