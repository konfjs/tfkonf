import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeEnvgroupAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvgroupAttachmentArgs {
  envgroup_id: string;
  environment: string;
  timeouts: GoogleApigeeEnvgroupAttachmentArgsTimeouts;
}
export class google_apigee_envgroup_attachment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvgroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_envgroup_attachment");
  }
}