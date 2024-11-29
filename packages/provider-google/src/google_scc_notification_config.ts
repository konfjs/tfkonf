import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccNotificationConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccNotificationConfigArgs {
  config_id: string;
  description?: string;
  organization: string;
  pubsub_topic: string;
  streaming_config: GoogleSccNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccNotificationConfigArgsTimeouts;
}
export class google_scc_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_notification_config");
  }
}