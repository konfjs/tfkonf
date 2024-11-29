import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeHubScopeRbacRoleBindingArgsRole {
  predefined_role?: string;
}
export interface GoogleGkeHubScopeRbacRoleBindingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubScopeRbacRoleBindingArgs {
  group?: string;
  labels?: {
    [key: string]: string;
  };
  scope_id: string;
  scope_rbac_role_binding_id: string;
  user?: string;
  role: GoogleGkeHubScopeRbacRoleBindingArgsRole;
  timeouts?: GoogleGkeHubScopeRbacRoleBindingArgsTimeouts;
}
export class google_gke_hub_scope_rbac_role_binding extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubScopeRbacRoleBindingArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_scope_rbac_role_binding");
  }
}