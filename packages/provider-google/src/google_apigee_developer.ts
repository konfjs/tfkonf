import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeDeveloperArgsattributes {
  name?: string;
  value?: string;
}
export interface GoogleApigeeDeveloperArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeDeveloperArgs {
  email: string;
  first_name: string;
  last_name: string;
  org_id: string;
  user_name: string;
  attributes: GoogleApigeeDeveloperArgsattributes;
  timeouts: GoogleApigeeDeveloperArgstimeouts;
}
export class google_apigee_developer extends TerraformResource {
  readonly created_at!: string;
  readonly id?: string;
  readonly last_modified_at!: string;
  readonly organizatio_name!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeDeveloperArgs) {
    super(config, "resource", args, resourceName, "google_apigee_developer");
  }
}