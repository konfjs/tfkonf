import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeNetworkAttachmentArgs {
  connection_preference: string;
  description?: string;
  name: string;
  producer_accept_lists?: string[];
  producer_reject_lists?: string[];
  subnetworks: string[];
  timeouts: Timeouts;
}
export class google_compute_network_attachment extends TerraformResource {
  readonly connection_endpoints!: any[];
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id!: string;
  readonly kind!: string;
  readonly network!: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly self_link_with_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNetworkAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_network_attachment");
  }
}