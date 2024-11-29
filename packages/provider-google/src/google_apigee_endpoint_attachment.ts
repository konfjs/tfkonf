import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeEndpointAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEndpointAttachmentArgs {
  endpoint_attachment_id: string;
  location: string;
  org_id: string;
  service_attachment: string;
  timeouts: GoogleApigeeEndpointAttachmentArgsTimeouts;
}
export class google_apigee_endpoint_attachment extends TerraformResource {
  readonly connection_state!: string;
  readonly host!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEndpointAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_endpoint_attachment");
  }
}