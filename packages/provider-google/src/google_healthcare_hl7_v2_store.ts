import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleHealthcareHl7V2StoreArgsNotificationConfig {
  pubsub_topic: string;
}
export interface GoogleHealthcareHl7V2StoreArgsNotificationConfigs {
  filter?: string;
  pubsub_topic: string;
}
export interface GoogleHealthcareHl7V2StoreArgsParserConfig {
  allow_null_header?: boolean;
  schema?: string;
  segment_terminator?: string;
  version?: string;
}
export interface GoogleHealthcareHl7V2StoreArgsTimeouts {
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
  notification_config: GoogleHealthcareHl7V2StoreArgsNotificationConfig;
  notification_configs: GoogleHealthcareHl7V2StoreArgsNotificationConfigs;
  parser_config: GoogleHealthcareHl7V2StoreArgsParserConfig;
  timeouts: GoogleHealthcareHl7V2StoreArgsTimeouts;
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