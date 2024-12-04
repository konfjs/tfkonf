import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePublicAdvertisedPrefixArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputePublicAdvertisedPrefixArgs {
  description?: string;
  dns_verification_ip: string;
  ip_cidr_range: string;
  name: string;
  timeouts?: GoogleComputePublicAdvertisedPrefixArgsTimeouts;
}

export class google_compute_public_advertised_prefix extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly shared_secret!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputePublicAdvertisedPrefixArgs) {
    super(config, "resource", args, resourceName, "google_compute_public_advertised_prefix");
  }
}
