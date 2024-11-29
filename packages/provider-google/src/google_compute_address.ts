import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeAddressArgs {
  address_type?: string;
  description?: string;
  ip_version?: string;
  ipv6_endpoint_type?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  network?: string;
  timeouts: GoogleComputeAddressArgsTimeouts;
}
export class google_compute_address extends TerraformResource {
  readonly address?: string;
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly network_tier?: string;
  readonly prefix_length?: number;
  readonly project?: string;
  readonly purpose?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly subnetwork?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly users!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeAddressArgs) {
    super(config, "resource", args, resourceName, "google_compute_address");
  }
}