import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubNamespaceArgs {
  labels?: {
    [key: string]: string;
  };
  namespace_labels?: {
    [key: string]: string;
  };
  scope: string;
  scope_id: string;
  scope_namespace_id: string;
  timeouts: Timeouts;
}
export class google_gke_hub_namespace extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubNamespaceArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_namespace");
  }
}