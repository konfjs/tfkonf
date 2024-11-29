import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeEnvgroupArgs {
  hostnames?: string[];
  name: string;
  org_id: string;
  timeouts: Timeouts;
}
export class google_apigee_envgroup extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvgroupArgs) {
    super(config, "resource", args, resourceName, "google_apigee_envgroup");
  }
}