import { TerraformConfig, TerraformResource } from "tfs";
export interface Ebs {
  delete_on_termination?: string;
  encrypted?: string;
  kms_key_id?: string;
  snapshot_id?: string;
}
export interface BlockDeviceMappings {
  device_name?: string;
  no_device?: string;
  virtual_name?: string;
  ebs: Ebs;
}
export interface CapacityReservationTarget {
  capacity_reservation_id?: string;
  capacity_reservation_resource_group_arn?: string;
}
export interface CapacityReservationSpecification {
  capacity_reservation_preference?: string;
  capacity_reservation_target: CapacityReservationTarget;
}
export interface CpuOptions {
  amd_sev_snp?: string;
  core_count?: number;
  threads_per_core?: number;
}
export interface CreditSpecification {
  cpu_credits?: string;
}
export interface ElasticGpuSpecifications {
  type: string;
}
export interface ElasticInferenceAccelerator {
  type: string;
}
export interface EnclaveOptions {
  enabled?: boolean;
}
export interface HibernationOptions {
  configured: boolean;
}
export interface IamInstanceProfile {
  arn?: string;
  name?: string;
}
export interface SpotOptions {
  block_duration_minutes?: number;
  instance_interruption_behavior?: string;
  max_price?: string;
  spot_instance_type?: string;
}
export interface InstanceMarketOptions {
  market_type?: string;
  spot_options: SpotOptions;
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
export interface LicenseSpecification {
  license_configuration_arn: string;
}
export interface MaintenanceOptions {
  auto_recovery?: string;
}
export interface MetadataOptions {}
export interface Monitoring {
  enabled?: boolean;
}
export interface NetworkInterfaces {
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
export interface Placement {
  affinity?: string;
  availability_zone?: string;
  group_name?: string;
  host_id?: string;
  host_resource_group_arn?: string;
  partition_number?: number;
  spread_domain?: string;
  tenancy?: string;
}
export interface PrivateDnsNameOptions {
  enable_resource_name_dns_a_record?: boolean;
  enable_resource_name_dns_aaaa_record?: boolean;
  hostname_type?: string;
}
export interface TagSpecifications {
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
  block_device_mappings: BlockDeviceMappings;
  capacity_reservation_specification: CapacityReservationSpecification;
  cpu_options: CpuOptions;
  credit_specification: CreditSpecification;
  elastic_gpu_specifications: ElasticGpuSpecifications;
  elastic_inference_accelerator: ElasticInferenceAccelerator;
  enclave_options: EnclaveOptions;
  hibernation_options: HibernationOptions;
  iam_instance_profile: IamInstanceProfile;
  instance_market_options: InstanceMarketOptions;
  instance_requirements: InstanceRequirements;
  license_specification: LicenseSpecification;
  maintenance_options: MaintenanceOptions;
  metadata_options: MetadataOptions;
  monitoring: Monitoring;
  network_interfaces: NetworkInterfaces;
  placement: Placement;
  private_dns_name_options: PrivateDnsNameOptions;
  tag_specifications: TagSpecifications;
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