import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeInterconnectAttachmentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInterconnectAttachmentArgs {
  admin_enabled?: boolean;
  candidate_subnets?: string[];
  description?: string;
  encryption?: string;
  interconnect?: string;
  ipsec_internal_addresses?: string[];
  name: string;
  router: string;
  subnet_length?: number;
  timeouts: GoogleComputeInterconnectAttachmentArgstimeouts;
}
export class google_compute_interconnect_attachment extends TerraformResource {
  readonly bandwidth?: string;
  readonly cloud_router_ip_address!: string;
  readonly cloud_router_ipv6_address!: string;
  readonly creation_timestamp!: string;
  readonly customer_router_ip_address!: string;
  readonly customer_router_ipv6_address!: string;
  readonly edge_availability_domain?: string;
  readonly google_reference_id!: string;
  readonly id?: string;
  readonly mtu?: string;
  readonly pairing_key!: string;
  readonly partner_asn!: string;
  readonly private_interconnect_info!: any[];
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly stack_type?: string;
  readonly state!: string;
  readonly type?: string;
  readonly vlan_tag8021q?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInterconnectAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_interconnect_attachment");
  }
}