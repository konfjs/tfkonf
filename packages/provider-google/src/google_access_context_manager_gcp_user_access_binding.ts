import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAccessContextManagerGcpUserAccessBindingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerGcpUserAccessBindingArgs {
  access_levels: string[];
  group_key: string;
  organization_id: string;
  timeouts?: GoogleAccessContextManagerGcpUserAccessBindingArgsTimeouts;
}
export class google_access_context_manager_gcp_user_access_binding extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerGcpUserAccessBindingArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_gcp_user_access_binding");
  }
}