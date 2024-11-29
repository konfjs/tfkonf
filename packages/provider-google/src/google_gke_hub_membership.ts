import { TerraformConfig, TerraformResource } from "tfs";
export interface Authority {
  issuer: string;
}
export interface GkeCluster {
  resource_link: string;
}
export interface Endpoint {
  gke_cluster: GkeCluster;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubMembershipArgs {
  labels?: {
    [key: string]: string;
  };
  location?: string;
  membership_id: string;
  authority: Authority;
  endpoint: Endpoint;
  timeouts: Timeouts;
}
export class google_gke_hub_membership extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_membership");
  }
}