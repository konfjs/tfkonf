import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2ProjectNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccV2ProjectNotificationConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2ProjectNotificationConfigArgs {
  config_id: string;
  description?: string;
  location?: string;
  pubsub_topic?: string;
  streaming_config: GoogleSccV2ProjectNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccV2ProjectNotificationConfigArgstimeouts;
}
export class google_scc_v2_project_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2ProjectNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_project_notification_config");
  }
}