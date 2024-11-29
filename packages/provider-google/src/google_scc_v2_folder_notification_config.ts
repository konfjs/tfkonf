import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2FolderNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccV2FolderNotificationConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2FolderNotificationConfigArgs {
  config_id: string;
  description?: string;
  folder: string;
  location?: string;
  pubsub_topic: string;
  streaming_config: GoogleSccV2FolderNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccV2FolderNotificationConfigArgstimeouts;
}
export class google_scc_v2_folder_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2FolderNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_folder_notification_config");
  }
}