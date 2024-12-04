import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApphubServiceProjectAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApphubServiceProjectAttachmentArgs {
  service_project?: string;
  service_project_attachment_id: string;
  timeouts?: GoogleApphubServiceProjectAttachmentArgsTimeouts;
}

export class google_apphub_service_project_attachment extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleApphubServiceProjectAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_apphub_service_project_attachment");
  }
}
