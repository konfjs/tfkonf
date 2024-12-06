import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbArgsAccessLogs {
  bucket: string;
  enabled?: boolean;
  prefix?: string;
}

export interface AwsLbArgsConnectionLogs {
  bucket: string;
  enabled?: boolean;
  prefix?: string;
}

export interface AwsLbArgsSubnetMapping {
  allocation_id?: string;
  ipv6_address?: string;
  private_ipv4_address?: string;
  subnet_id: string;
}

export interface AwsLbArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLbArgs {
  client_keep_alive?: number;
  customer_owned_ipv4_pool?: string;
  desync_mitigation_mode?: string;
  dns_record_client_routing_policy?: string;
  drop_invalid_header_fields?: boolean;
  enable_cross_zone_load_balancing?: boolean;
  enable_deletion_protection?: boolean;
  enable_http2?: boolean;
  enable_tls_version_and_cipher_suite_headers?: boolean;
  enable_waf_fail_open?: boolean;
  enable_xff_client_port?: boolean;
  enable_zonal_shift?: boolean;
  idle_timeout?: number;
  load_balancer_type?: string;
  preserve_host_header?: boolean;
  tags?: { [key: string]: string };
  xff_header_processing_mode?: string;
  access_logs: AwsLbArgsAccessLogs;
  connection_logs: AwsLbArgsConnectionLogs;
  subnet_mapping: AwsLbArgsSubnetMapping;
  timeouts?: AwsLbArgsTimeouts;
}

export class aws_lb extends TerraformResource {
  readonly arn!: string;
  readonly arn_suffix!: string;
  readonly dns_name!: string;
  readonly enforce_security_group_inbound_rules_on_private_link_traffic?: string;
  readonly id?: string;
  readonly internal?: boolean;
  readonly ip_address_type?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly security_groups?: string[];
  readonly subnets?: string[];
  readonly tags_all?: { [key: string]: string };
  readonly vpc_id!: string;
  readonly zone_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLbArgs) {
    super(config, "resource", args, resourceName, "aws_lb");
  }
}
