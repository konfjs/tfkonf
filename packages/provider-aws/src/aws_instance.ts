import { TerraformConfig, TerraformResource } from "tfs";
export interface CapacityReservationTarget {
  capacity_reservation_id?: string;
  capacity_reservation_resource_group_arn?: string;
}
export interface CapacityReservationSpecification {
  capacity_reservation_preference?: string;
  capacity_reservation_target: CapacityReservationTarget;
}
export interface CpuOptions {}
export interface CreditSpecification {
  cpu_credits?: string;
}
export interface EbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  tags?: {
    [key: string]: string;
  };
}
export interface EnclaveOptions {}
export interface EphemeralBlockDevice {
  device_name: string;
  no_device?: boolean;
  virtual_name?: string;
}
export interface SpotOptions {}
export interface InstanceMarketOptions {
  spot_options: SpotOptions;
}
export interface LaunchTemplate {
  version?: string;
}
export interface MaintenanceOptions {}
export interface MetadataOptions {
  http_endpoint?: string;
  http_protocol_ipv6?: string;
}
export interface NetworkInterface {
  delete_on_termination?: boolean;
  device_index: number;
  network_card_index?: number;
  network_interface_id: string;
}
export interface PrivateDnsNameOptions {}
export interface RootBlockDevice {
  delete_on_termination?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsInstanceArgs {
  get_password_data?: boolean;
  hibernation?: boolean;
  source_dest_check?: boolean;
  tags?: {
    [key: string]: string;
  };
  user_data_replace_on_change?: boolean;
  volume_tags?: {
    [key: string]: string;
  };
  capacity_reservation_specification: CapacityReservationSpecification;
  cpu_options: CpuOptions;
  credit_specification: CreditSpecification;
  ebs_block_device: EbsBlockDevice;
  enclave_options: EnclaveOptions;
  ephemeral_block_device: EphemeralBlockDevice;
  instance_market_options: InstanceMarketOptions;
  launch_template: LaunchTemplate;
  maintenance_options: MaintenanceOptions;
  metadata_options: MetadataOptions;
  network_interface: NetworkInterface;
  private_dns_name_options: PrivateDnsNameOptions;
  root_block_device: RootBlockDevice;
  timeouts: Timeouts;
}
export class aws_instance extends TerraformResource {
  readonly ami?: string;
  readonly arn!: string;
  readonly associate_public_ip_address?: boolean;
  readonly availability_zone?: string;
  readonly cpu_core_count?: number;
  readonly cpu_threads_per_core?: number;
  readonly disable_api_stop?: boolean;
  readonly disable_api_termination?: boolean;
  readonly ebs_optimized?: boolean;
  readonly host_id?: string;
  readonly host_resource_group_arn?: string;
  readonly iam_instance_profile?: string;
  readonly id?: string;
  readonly instance_initiated_shutdown_behavior?: string;
  readonly instance_lifecycle!: string;
  readonly instance_state!: string;
  readonly instance_type?: string;
  readonly ipv6_address_count?: number;
  readonly ipv6_addresses?: string[];
  readonly key_name?: string;
  readonly monitoring?: boolean;
  readonly outpost_arn!: string;
  readonly password_data!: string;
  readonly placement_group?: string;
  readonly placement_partition_number?: number;
  readonly primary_network_interface_id!: string;
  readonly private_dns!: string;
  readonly private_ip?: string;
  readonly public_dns!: string;
  readonly public_ip!: string;
  readonly secondary_private_ips?: string[];
  readonly security_groups?: string[];
  readonly spot_instance_request_id!: string;
  readonly subnet_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tenancy?: string;
  readonly user_data?: string;
  readonly user_data_base64?: string;
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_instance");
  }
}