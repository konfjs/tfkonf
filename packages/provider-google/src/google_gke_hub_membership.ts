import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleGkeHubMembershipArgsAuthority {
  issuer: string;
}
export interface GoogleGkeHubMembershipArgsEndpointGkeCluster {
  resource_link: string;
}
export interface GoogleGkeHubMembershipArgsEndpoint {
  gke_cluster: GoogleGkeHubMembershipArgsEndpointGkeCluster;
}
export interface GoogleGkeHubMembershipArgsTimeouts {
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
  authority: GoogleGkeHubMembershipArgsAuthority;
  endpoint: GoogleGkeHubMembershipArgsEndpoint;
  timeouts?: GoogleGkeHubMembershipArgsTimeouts;
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