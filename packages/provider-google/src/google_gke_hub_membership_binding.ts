import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeHubMembershipBindingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeHubMembershipBindingArgs {
  labels?: { [key: string]: string };
  location: string;
  membership_binding_id: string;
  membership_id: string;
  scope: string;
  timeouts?: GoogleGkeHubMembershipBindingArgsTimeouts;
}

export class google_gke_hub_membership_binding extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: any[];
  readonly terraform_labels!: { [key: string]: string };
  readonly uid!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubMembershipBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_membership_binding");
  }
}
