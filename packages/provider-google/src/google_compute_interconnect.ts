import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeInterconnectArgsMacsecPreSharedKeys {
  fail_open?: boolean;
  name: string;
  start_time?: string;
}
export interface GoogleComputeInterconnectArgsMacsec {
  fail_open?: boolean;
  pre_shared_keys: GoogleComputeInterconnectArgsMacsecPreSharedKeys;
}
export interface GoogleComputeInterconnectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeInterconnectArgs {
  admin_enabled?: boolean;
  customer_name?: string;
  description?: string;
  interconnect_type: string;
  labels?: {
    [key: string]: string;
  };
  link_type: string;
  location?: string;
  macsec_enabled?: boolean;
  name: string;
  noc_contact_email?: string;
  remote_location?: string;
  requested_features?: string[];
  requested_link_count: number;
  macsec: GoogleComputeInterconnectArgsMacsec;
  timeouts?: GoogleComputeInterconnectArgsTimeouts;
}
export class google_compute_interconnect extends TerraformResource {
  readonly available_features!: string[];
  readonly circuit_infos!: any[];
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly expected_outages!: any[];
  readonly google_ip_address!: string;
  readonly google_reference_id!: string;
  readonly id?: string;
  readonly interconnect_attachments!: string[];
  readonly label_fingerprint!: string;
  readonly operational_status!: string;
  readonly peer_ip_address!: string;
  readonly project?: string;
  readonly provisioned_link_count!: number;
  readonly satisfies_pzs!: boolean;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeInterconnectArgs) {
    super(config, "resource", args, resourceName, "google_compute_interconnect");
  }
}