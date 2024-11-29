import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationConfig {
  pubsub_topic: string;
}
export interface NotificationConfigs {
  filter?: string;
  pubsub_topic: string;
}
export interface ParserConfig {
  allow_null_header?: boolean;
  schema?: string;
  segment_terminator?: string;
  version?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareHl7V2StoreArgs {
  dataset: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  reject_duplicate_message?: boolean;
  notification_config: NotificationConfig;
  notification_configs: NotificationConfigs;
  parser_config: ParserConfig;
  timeouts: Timeouts;
}
export class google_healthcare_hl7_v2_store extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_hl7_v2_store");
  }
}