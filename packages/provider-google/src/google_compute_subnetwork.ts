import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeSubnetworkArgsLogConfig {
  aggregation_interval?: string;
  filter_expr?: string;
  flow_sampling?: number;
  metadata?: string;
  metadata_fields?: string[];
}
export interface GoogleComputeSubnetworkArgsSecondaryIpRange {
  range_name: string;
  reserved_internal_range?: string;
}
export interface GoogleComputeSubnetworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeSubnetworkArgs {
  description?: string;
  ipv6_access_type?: string;
  name: string;
  network: string;
  reserved_internal_range?: string;
  role?: string;
  send_secondary_ip_range_if_empty?: boolean;
  log_config: GoogleComputeSubnetworkArgsLogConfig;
  secondary_ip_range: GoogleComputeSubnetworkArgsSecondaryIpRange;
  timeouts: GoogleComputeSubnetworkArgsTimeouts;
}
export class google_compute_subnetwork extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly external_ipv6_prefix?: string;
  readonly fingerprint!: string;
  readonly gateway_address!: string;
  readonly id?: string;
  readonly internal_ipv6_prefix!: string;
  readonly ip_cidr_range?: string;
  readonly ipv6_cidr_range!: string;
  readonly private_ip_google_access?: boolean;
  readonly private_ipv6_google_access?: string;
  readonly project?: string;
  readonly purpose?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly stack_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSubnetworkArgs) {
    super(config, "resource", args, resourceName, "google_compute_subnetwork");
  }
}