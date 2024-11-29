import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeHubScopeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubScopeArgs {
  labels?: {
    [key: string]: string;
  };
  namespace_labels?: {
    [key: string]: string;
  };
  scope_id: string;
  timeouts: GoogleGkeHubScopeArgsTimeouts;
}
export class google_gke_hub_scope extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_scope");
  }
}