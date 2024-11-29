import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubMembershipArgsauthority {
  issuer: string;
}
export interface GoogleGkeHubMembershipArgsendpointGkeCluster {
  resource_link: string;
}
export interface GoogleGkeHubMembershipArgsendpoint {
  gke_cluster: GoogleGkeHubMembershipArgsendpointGkeCluster;
}
export interface GoogleGkeHubMembershipArgstimeouts {
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
  authority: GoogleGkeHubMembershipArgsauthority;
  endpoint: GoogleGkeHubMembershipArgsendpoint;
  timeouts: GoogleGkeHubMembershipArgstimeouts;
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