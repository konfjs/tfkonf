import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeAppGroupArgsattributes {
  name?: string;
  value?: string;
}
export interface GoogleApigeeAppGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeAppGroupArgs {
  channel_id?: string;
  channel_uri?: string;
  display_name?: string;
  name: string;
  org_id: string;
  status?: string;
  attributes: GoogleApigeeAppGroupArgsattributes;
  timeouts: GoogleApigeeAppGroupArgstimeouts;
}
export class google_apigee_app_group extends TerraformResource {
  readonly app_group_id!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly last_modified_at!: string;
  readonly organization!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeAppGroupArgs) {
    super(config, "resource", args, resourceName, "google_apigee_app_group");
  }
}