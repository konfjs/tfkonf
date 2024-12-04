import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePublicDelegatedPrefixArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputePublicDelegatedPrefixArgs {
  description?: string;
  ip_cidr_range: string;
  is_live_migration?: boolean;
  name: string;
  parent_prefix: string;
  region: string;
  timeouts?: GoogleComputePublicDelegatedPrefixArgsTimeouts;
}

export class google_compute_public_delegated_prefix extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputePublicDelegatedPrefixArgs) {
    super(config, "resource", args, resourceName, "google_compute_public_delegated_prefix");
  }
}
