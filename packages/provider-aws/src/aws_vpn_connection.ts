import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpnConnectionArgsTunnel1LogOptionsCloudwatchLogOptions {
  log_enabled?: boolean;
  log_group_arn?: string;
  log_output_format?: string;
}
export interface AwsVpnConnectionArgsTunnel1LogOptions {
  cloudwatch_log_options: AwsVpnConnectionArgsTunnel1LogOptionsCloudwatchLogOptions;
}
export interface AwsVpnConnectionArgsTunnel2LogOptionsCloudwatchLogOptions {
  log_enabled?: boolean;
  log_group_arn?: string;
  log_output_format?: string;
}
export interface AwsVpnConnectionArgsTunnel2LogOptions {
  cloudwatch_log_options: AwsVpnConnectionArgsTunnel2LogOptionsCloudwatchLogOptions;
}
export interface AwsVpnConnectionArgs {
  customer_gateway_id: string;
  tags?: {
    [key: string]: string;
  };
  transit_gateway_id?: string;
  transport_transit_gateway_attachment_id?: string;
  tunnel1_dpd_timeout_action?: string;
  tunnel1_dpd_timeout_seconds?: number;
  tunnel1_enable_tunnel_lifecycle_control?: boolean;
  tunnel1_ike_versions?: string[];
  tunnel1_phase1_dh_group_numbers?: number[];
  tunnel1_phase1_encryption_algorithms?: string[];
  tunnel1_phase1_integrity_algorithms?: string[];
  tunnel1_phase1_lifetime_seconds?: number;
  tunnel1_phase2_dh_group_numbers?: number[];
  tunnel1_phase2_encryption_algorithms?: string[];
  tunnel1_phase2_integrity_algorithms?: string[];
  tunnel1_phase2_lifetime_seconds?: number;
  tunnel1_rekey_fuzz_percentage?: number;
  tunnel1_rekey_margin_time_seconds?: number;
  tunnel1_replay_window_size?: number;
  tunnel1_startup_action?: string;
  tunnel2_dpd_timeout_action?: string;
  tunnel2_dpd_timeout_seconds?: number;
  tunnel2_enable_tunnel_lifecycle_control?: boolean;
  tunnel2_ike_versions?: string[];
  tunnel2_phase1_dh_group_numbers?: number[];
  tunnel2_phase1_encryption_algorithms?: string[];
  tunnel2_phase1_integrity_algorithms?: string[];
  tunnel2_phase1_lifetime_seconds?: number;
  tunnel2_phase2_dh_group_numbers?: number[];
  tunnel2_phase2_encryption_algorithms?: string[];
  tunnel2_phase2_integrity_algorithms?: string[];
  tunnel2_phase2_lifetime_seconds?: number;
  tunnel2_rekey_fuzz_percentage?: number;
  tunnel2_rekey_margin_time_seconds?: number;
  tunnel2_replay_window_size?: number;
  tunnel2_startup_action?: string;
  type: string;
  vpn_gateway_id?: string;
  tunnel1_log_options: AwsVpnConnectionArgsTunnel1LogOptions;
  tunnel2_log_options: AwsVpnConnectionArgsTunnel2LogOptions;
}
export class aws_vpn_connection extends TerraformResource {
  readonly arn!: string;
  readonly core_network_arn!: string;
  readonly core_network_attachment_arn!: string;
  readonly customer_gateway_configuration!: string;
  readonly enable_acceleration?: boolean;
  readonly id?: string;
  readonly local_ipv4_network_cidr?: string;
  readonly local_ipv6_network_cidr?: string;
  readonly outside_ip_address_type?: string;
  readonly remote_ipv4_network_cidr?: string;
  readonly remote_ipv6_network_cidr?: string;
  readonly routes!: any[];
  readonly static_routes_only?: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly transit_gateway_attachment_id!: string;
  readonly tunnel1_address!: string;
  readonly tunnel1_bgp_asn!: string;
  readonly tunnel1_bgp_holdtime!: number;
  readonly tunnel1_cgw_inside_address!: string;
  readonly tunnel1_inside_cidr?: string;
  readonly tunnel1_inside_ipv6_cidr?: string;
  readonly tunnel1_preshared_key?: string;
  readonly tunnel1_vgw_inside_address!: string;
  readonly tunnel2_address!: string;
  readonly tunnel2_bgp_asn!: string;
  readonly tunnel2_bgp_holdtime!: number;
  readonly tunnel2_cgw_inside_address!: string;
  readonly tunnel2_inside_cidr?: string;
  readonly tunnel2_inside_ipv6_cidr?: string;
  readonly tunnel2_preshared_key?: string;
  readonly tunnel2_vgw_inside_address!: string;
  readonly tunnel_inside_ip_version?: string;
  readonly vgw_telemetry!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_connection");
  }
}