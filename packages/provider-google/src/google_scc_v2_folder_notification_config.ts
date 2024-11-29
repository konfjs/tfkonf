import { TerraformConfig, TerraformResource } from "tfs";
export interface StreamingConfig {
  filter: string;
}
export interface Timeouts {
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
  streaming_config: StreamingConfig;
  timeouts: Timeouts;
}
export class google_scc_v2_folder_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2FolderNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_folder_notification_config");
  }
}