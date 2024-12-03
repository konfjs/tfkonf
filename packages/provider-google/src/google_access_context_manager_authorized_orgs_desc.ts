import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAccessContextManagerAuthorizedOrgsDescArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAuthorizedOrgsDescArgs {
  asset_type?: string;
  authorization_direction?: string;
  authorization_type?: string;
  name: string;
  orgs?: string[];
  parent: string;
  timeouts?: GoogleAccessContextManagerAuthorizedOrgsDescArgsTimeouts;
}
export class google_access_context_manager_authorized_orgs_desc extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAuthorizedOrgsDescArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_authorized_orgs_desc");
  }
}