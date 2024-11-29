import { TerraformConfig, TerraformResource } from "tfs";
export interface StreamingConfig {
  filter: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccNotificationConfigArgs {
  config_id: string;
  description?: string;
  organization: string;
  pubsub_topic: string;
  streaming_config: StreamingConfig;
  timeouts: Timeouts;
}
export class google_scc_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_notification_config");
  }
}