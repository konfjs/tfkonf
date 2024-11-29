import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeGlobalAddressArgs {
  address_type?: string;
  description?: string;
  ip_version?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  network?: string;
  purpose?: string;
  timeouts: Timeouts;
}
export class google_compute_global_address extends TerraformResource {
  readonly address?: string;
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly label_fingerprint!: string;
  readonly prefix_length?: number;
  readonly project?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeGlobalAddressArgs) {
    super(config, "resource", args, resourceName, "google_compute_global_address");
  }
}