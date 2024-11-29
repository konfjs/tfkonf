import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccProjectNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccProjectNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccProjectNotificationConfigArgs {
  config_id: string;
  description?: string;
  pubsub_topic: string;
  streaming_config: GoogleSccProjectNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccProjectNotificationConfigArgsTimeouts;
}
export class google_scc_project_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccProjectNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_project_notification_config");
  }
}