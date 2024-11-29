import { TerraformConfig, TerraformResource } from "tfs";
export interface GkeClusters {
  gke_cluster_name: string;
}
export interface Networks {
  network_url: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDnsResponsePolicyArgs {
  description?: string;
  response_policy_name: string;
  gke_clusters: GkeClusters;
  networks: Networks;
  timeouts: Timeouts;
}
export class google_dns_response_policy extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsResponsePolicyArgs) {
    super(config, "resource", args, resourceName, "google_dns_response_policy");
  }
}