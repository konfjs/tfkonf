import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsResponsePolicyArgsGkeClusters {
  gke_cluster_name: string;
}

export interface GoogleDnsResponsePolicyArgsNetworks {
  network_url: string;
}

export interface GoogleDnsResponsePolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDnsResponsePolicyArgs {
  description?: string;
  response_policy_name: string;
  gke_clusters: GoogleDnsResponsePolicyArgsGkeClusters;
  networks: GoogleDnsResponsePolicyArgsNetworks;
  timeouts?: GoogleDnsResponsePolicyArgsTimeouts;
}

export class google_dns_response_policy extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsResponsePolicyArgs) {
    super(config, "resource", args, resourceName, "google_dns_response_policy");
  }
}
