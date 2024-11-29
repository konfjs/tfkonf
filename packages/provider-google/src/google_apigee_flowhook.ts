import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeFlowhookArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeFlowhookArgs {
  continue_on_error?: boolean;
  description?: string;
  environment: string;
  flow_hook_point: string;
  org_id: string;
  sharedflow: string;
  timeouts: GoogleApigeeFlowhookArgstimeouts;
}
export class google_apigee_flowhook extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeFlowhookArgs) {
    super(config, "resource", args, resourceName, "google_apigee_flowhook");
  }
}