import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionSslPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionSslPolicyArgs {
  custom_features?: string[];
  description?: string;
  min_tls_version?: string;
  name: string;
  profile?: string;
  timeouts: GoogleComputeRegionSslPolicyArgsTimeouts;
}
export class google_compute_region_ssl_policy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly enabled_features!: string[];
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionSslPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_ssl_policy");
  }
}