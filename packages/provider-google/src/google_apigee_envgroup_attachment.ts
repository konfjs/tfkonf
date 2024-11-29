import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvgroupAttachmentArgs {
  envgroup_id: string;
  environment: string;
  timeouts: Timeouts;
}
export class google_apigee_envgroup_attachment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvgroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_envgroup_attachment");
  }
}