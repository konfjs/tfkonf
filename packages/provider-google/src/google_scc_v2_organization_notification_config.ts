import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccV2OrganizationNotificationConfigArgsStreamingConfig {
  filter: string;
}
export interface GoogleSccV2OrganizationNotificationConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2OrganizationNotificationConfigArgs {
  config_id: string;
  description?: string;
  location?: string;
  organization: string;
  pubsub_topic: string;
  streaming_config: GoogleSccV2OrganizationNotificationConfigArgsStreamingConfig;
  timeouts: GoogleSccV2OrganizationNotificationConfigArgstimeouts;
}
export class google_scc_v2_organization_notification_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly service_account!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationNotificationConfigArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_notification_config");
  }
}