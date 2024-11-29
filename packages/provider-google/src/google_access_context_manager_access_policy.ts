import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerAccessPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessPolicyArgs {
  parent: string;
  scopes?: string[];
  title: string;
  timeouts: GoogleAccessContextManagerAccessPolicyArgstimeouts;
}
export class google_access_context_manager_access_policy extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessPolicyArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_policy");
  }
}