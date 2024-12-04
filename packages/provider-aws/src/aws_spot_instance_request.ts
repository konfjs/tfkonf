import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSpotInstanceRequestArgsCapacityReservationSpecificationCapacityReservationTarget {
  capacity_reservation_id?: string;
  capacity_reservation_resource_group_arn?: string;
}

export interface AwsSpotInstanceRequestArgsCapacityReservationSpecification {
  capacity_reservation_preference?: string;
  capacity_reservation_target: AwsSpotInstanceRequestArgsCapacityReservationSpecificationCapacityReservationTarget;
}

export interface AwsSpotInstanceRequestArgsCpuOptions {
}

export interface AwsSpotInstanceRequestArgsCreditSpecification {
  cpu_credits?: string;
}

export interface AwsSpotInstanceRequestArgsEbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  tags?: { [key: string]: string };
}

export interface AwsSpotInstanceRequestArgsEnclaveOptions {
}

export interface AwsSpotInstanceRequestArgsEphemeralBlockDevice {
  device_name: string;
  no_device?: boolean;
  virtual_name?: string;
}

export interface AwsSpotInstanceRequestArgsLaunchTemplate {
  version?: string;
}

export interface AwsSpotInstanceRequestArgsMaintenanceOptions {
}

export interface AwsSpotInstanceRequestArgsMetadataOptions {
  http_endpoint?: string;
  http_protocol_ipv6?: string;
}

export interface AwsSpotInstanceRequestArgsNetworkInterface {
  delete_on_termination?: boolean;
  device_index: number;
  network_card_index?: number;
  network_interface_id: string;
}

export interface AwsSpotInstanceRequestArgsPrivateDnsNameOptions {
}

export interface AwsSpotInstanceRequestArgsRootBlockDevice {
  delete_on_termination?: boolean;
  tags?: { [key: string]: string };
}

export interface AwsSpotInstanceRequestArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface AwsSpotInstanceRequestArgs {
  block_duration_minutes?: number;
  get_password_data?: boolean;
  hibernation?: boolean;
  instance_interruption_behavior?: string;
  launch_group?: string;
  source_dest_check?: boolean;
  spot_type?: string;
  tags?: { [key: string]: string };
  user_data_replace_on_change?: boolean;
  volume_tags?: { [key: string]: string };
  wait_for_fulfillment?: boolean;
  capacity_reservation_specification: AwsSpotInstanceRequestArgsCapacityReservationSpecification;
  cpu_options: AwsSpotInstanceRequestArgsCpuOptions;
  credit_specification: AwsSpotInstanceRequestArgsCreditSpecification;
  ebs_block_device: AwsSpotInstanceRequestArgsEbsBlockDevice;
  enclave_options: AwsSpotInstanceRequestArgsEnclaveOptions;
  ephemeral_block_device: AwsSpotInstanceRequestArgsEphemeralBlockDevice;
  launch_template: AwsSpotInstanceRequestArgsLaunchTemplate;
  maintenance_options: AwsSpotInstanceRequestArgsMaintenanceOptions;
  metadata_options: AwsSpotInstanceRequestArgsMetadataOptions;
  network_interface: AwsSpotInstanceRequestArgsNetworkInterface;
  private_dns_name_options: AwsSpotInstanceRequestArgsPrivateDnsNameOptions;
  root_block_device: AwsSpotInstanceRequestArgsRootBlockDevice;
  timeouts?: AwsSpotInstanceRequestArgsTimeouts;
}

export class aws_spot_instance_request extends TerraformResource {
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
  readonly spot_bid_status!: string;
  readonly spot_instance_id!: string;
  readonly spot_price?: string;
  readonly spot_request_state!: string;
  readonly subnet_id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly tenancy?: string;
  readonly user_data?: string;
  readonly user_data_base64?: string;
  readonly valid_from?: string;
  readonly valid_until?: string;
  readonly vpc_security_group_ids?: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsSpotInstanceRequestArgs) {
    super(config, "resource", args, resourceName, "aws_spot_instance_request");
  }
}
