import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceNetworkingPeeredDnsDomainArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}

export interface GoogleServiceNetworkingPeeredDnsDomainArgs {
  dns_suffix: string;
  name: string;
  network: string;
  service?: string;
  timeouts?: GoogleServiceNetworkingPeeredDnsDomainArgsTimeouts;
}

export class google_service_networking_peered_dns_domain extends TerraformResource {
  readonly id?: string;
  readonly parent!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingPeeredDnsDomainArgs) {
    super(config, "resource", args, resourceName, "google_service_networking_peered_dns_domain");
  }
}
