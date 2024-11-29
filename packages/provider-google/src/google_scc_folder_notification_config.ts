import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccFolderNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccFolderNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccFolderNotificationConfigArgs {
  config_id: string;
  description?: string;
  folder: string;
  pubsub_topic: string;
  streaming_config: GoogleSccFolderNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccFolderNotificationConfigArgsTimeouts;
}
export class google_scc_folder_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccFolderNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_folder_notification_config");
  }
}