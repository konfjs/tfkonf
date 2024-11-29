import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageNotificationArgs {
  bucket: string;
  custom_attributes?: {
    [key: string]: string;
  };
  event_types?: string[];
  object_name_prefix?: string;
  payload_format: string;
  topic: string;
}
export class google_storage_notification extends TerraformResource {
  readonly id?: string;
  readonly notification_id!: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageNotificationArgs) {
    super(config, "resource", args, resourceName, "google_storage_notification");
  }
}