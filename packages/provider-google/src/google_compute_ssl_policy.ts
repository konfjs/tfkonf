import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSslPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeSslPolicyArgs {
  custom_features?: string[];
  description?: string;
  min_tls_version?: string;
  name: string;
  profile?: string;
  timeouts?: GoogleComputeSslPolicyArgsTimeouts;
}

export class google_compute_ssl_policy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly enabled_features!: string[];
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSslPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_ssl_policy");
  }
}
