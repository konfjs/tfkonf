import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLaunchTemplateArgsBlockDeviceMappingsEbs {
  delete_on_termination?: string;
  encrypted?: string;
  kms_key_id?: string;
  snapshot_id?: string;
}
export interface AwsLaunchTemplateArgsBlockDeviceMappings {
  device_name?: string;
  no_device?: string;
  virtual_name?: string;
  ebs: AwsLaunchTemplateArgsBlockDeviceMappingsEbs;
}
export interface AwsLaunchTemplateArgsCapacityReservationSpecificationCapacityReservationTarget {
  capacity_reservation_id?: string;
  capacity_reservation_resource_group_arn?: string;
}
export interface AwsLaunchTemplateArgsCapacityReservationSpecification {
  capacity_reservation_preference?: string;
  capacity_reservation_target: AwsLaunchTemplateArgsCapacityReservationSpecificationCapacityReservationTarget;
}
export interface AwsLaunchTemplateArgsCpuOptions {
  amd_sev_snp?: string;
  core_count?: number;
  threads_per_core?: number;
}
export interface AwsLaunchTemplateArgsCreditSpecification {
  cpu_credits?: string;
}
export interface AwsLaunchTemplateArgsElasticGpuSpecifications {
  type: string;
}
export interface AwsLaunchTemplateArgsElasticInferenceAccelerator {
  type: string;
}
export interface AwsLaunchTemplateArgsEnclaveOptions {
  enabled?: boolean;
}
export interface AwsLaunchTemplateArgsHibernationOptions {
  configured: boolean;
}
export interface AwsLaunchTemplateArgsIamInstanceProfile {
  arn?: string;
  name?: string;
}
export interface AwsLaunchTemplateArgsInstanceMarketOptionsSpotOptions {
  block_duration_minutes?: number;
  instance_interruption_behavior?: string;
  max_price?: string;
  spot_instance_type?: string;
}
export interface AwsLaunchTemplateArgsInstanceMarketOptions {
  market_type?: string;
  spot_options: AwsLaunchTemplateArgsInstanceMarketOptionsSpotOptions;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsAcceleratorCount {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsAcceleratorTotalMemoryMib {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsBaselineEbsBandwidthMbps {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsMemoryGibPerVcpu {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsMemoryMib {
  max?: number;
  min: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsNetworkBandwidthGbps {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsNetworkInterfaceCount {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsTotalLocalStorageGb {
  max?: number;
  min?: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirementsVcpuCount {
  max?: number;
  min: number;
}
export interface AwsLaunchTemplateArgsInstanceRequirements {
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
  accelerator_count: AwsLaunchTemplateArgsInstanceRequirementsAcceleratorCount;
  accelerator_total_memory_mib: AwsLaunchTemplateArgsInstanceRequirementsAcceleratorTotalMemoryMib;
  baseline_ebs_bandwidth_mbps: AwsLaunchTemplateArgsInstanceRequirementsBaselineEbsBandwidthMbps;
  memory_gib_per_vcpu: AwsLaunchTemplateArgsInstanceRequirementsMemoryGibPerVcpu;
  memory_mib: AwsLaunchTemplateArgsInstanceRequirementsMemoryMib;
  network_bandwidth_gbps: AwsLaunchTemplateArgsInstanceRequirementsNetworkBandwidthGbps;
  network_interface_count: AwsLaunchTemplateArgsInstanceRequirementsNetworkInterfaceCount;
  total_local_storage_gb: AwsLaunchTemplateArgsInstanceRequirementsTotalLocalStorageGb;
  vcpu_count: AwsLaunchTemplateArgsInstanceRequirementsVcpuCount;
}
export interface AwsLaunchTemplateArgsLicenseSpecification {
  license_configuration_arn: string;
}
export interface AwsLaunchTemplateArgsMaintenanceOptions {
  auto_recovery?: string;
}
export interface AwsLaunchTemplateArgsMetadataOptions {}
export interface AwsLaunchTemplateArgsMonitoring {
  enabled?: boolean;
}
export interface AwsLaunchTemplateArgsNetworkInterfaces {
  associate_carrier_ip_address?: string;
  associate_public_ip_address?: string;
  delete_on_termination?: string;
  description?: string;
  device_index?: number;
  interface_type?: string;
  ipv4_address_count?: number;
  ipv4_addresses?: string[];
  ipv4_prefix_count?: number;
  ipv4_prefixes?: string[];
  ipv6_address_count?: number;
  ipv6_addresses?: string[];
  ipv6_prefix_count?: number;
  ipv6_prefixes?: string[];
  network_card_index?: number;
  network_interface_id?: string;
  primary_ipv6?: string;
  private_ip_address?: string;
  security_groups?: string[];
  subnet_id?: string;
}
export interface AwsLaunchTemplateArgsPlacement {
  affinity?: string;
  availability_zone?: string;
  group_name?: string;
  host_id?: string;
  host_resource_group_arn?: string;
  partition_number?: number;
  spread_domain?: string;
  tenancy?: string;
}
export interface AwsLaunchTemplateArgsPrivateDnsNameOptions {
  enable_resource_name_dns_a_record?: boolean;
  enable_resource_name_dns_aaaa_record?: boolean;
  hostname_type?: string;
}
export interface AwsLaunchTemplateArgsTagSpecifications {
  resource_type?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsLaunchTemplateArgs {
  description?: string;
  disable_api_stop?: boolean;
  disable_api_termination?: boolean;
  ebs_optimized?: string;
  image_id?: string;
  instance_initiated_shutdown_behavior?: string;
  instance_type?: string;
  kernel_id?: string;
  key_name?: string;
  ram_disk_id?: string;
  security_group_names?: string[];
  tags?: {
    [key: string]: string;
  };
  update_default_version?: boolean;
  user_data?: string;
  vpc_security_group_ids?: string[];
  block_device_mappings: AwsLaunchTemplateArgsBlockDeviceMappings;
  capacity_reservation_specification: AwsLaunchTemplateArgsCapacityReservationSpecification;
  cpu_options: AwsLaunchTemplateArgsCpuOptions;
  credit_specification: AwsLaunchTemplateArgsCreditSpecification;
  elastic_gpu_specifications: AwsLaunchTemplateArgsElasticGpuSpecifications;
  elastic_inference_accelerator: AwsLaunchTemplateArgsElasticInferenceAccelerator;
  enclave_options: AwsLaunchTemplateArgsEnclaveOptions;
  hibernation_options: AwsLaunchTemplateArgsHibernationOptions;
  iam_instance_profile: AwsLaunchTemplateArgsIamInstanceProfile;
  instance_market_options: AwsLaunchTemplateArgsInstanceMarketOptions;
  instance_requirements: AwsLaunchTemplateArgsInstanceRequirements;
  license_specification: AwsLaunchTemplateArgsLicenseSpecification;
  maintenance_options: AwsLaunchTemplateArgsMaintenanceOptions;
  metadata_options: AwsLaunchTemplateArgsMetadataOptions;
  monitoring: AwsLaunchTemplateArgsMonitoring;
  network_interfaces: AwsLaunchTemplateArgsNetworkInterfaces;
  placement: AwsLaunchTemplateArgsPlacement;
  private_dns_name_options: AwsLaunchTemplateArgsPrivateDnsNameOptions;
  tag_specifications: AwsLaunchTemplateArgsTagSpecifications;
}
export class aws_launch_template extends TerraformResource {
  readonly arn!: string;
  readonly default_version?: number;
  readonly id?: string;
  readonly latest_version!: number;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLaunchTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_launch_template");
  }
}