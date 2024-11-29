import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsAwsKinesis {
  aws_role_arn: string;
  consumer_arn: string;
  gcp_service_account: string;
  stream_arn: string;
}
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageAvroFormat {}
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStoragePubsubAvroFormat {}
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageTextFormat {
  delimiter?: string;
}
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorage {
  bucket: string;
  match_glob?: string;
  minimum_object_create_time?: string;
  avro_format: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageAvroFormat;
  pubsub_avro_format: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
  text_format: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorageTextFormat;
}
export interface GooglePubsubTopicArgsIngestionDataSourceSettingsPlatformLogsSettings {
  severity?: string;
}
export interface GooglePubsubTopicArgsIngestionDataSourceSettings {
  aws_kinesis: GooglePubsubTopicArgsIngestionDataSourceSettingsAwsKinesis;
  cloud_storage: GooglePubsubTopicArgsIngestionDataSourceSettingsCloudStorage;
  platform_logs_settings: GooglePubsubTopicArgsIngestionDataSourceSettingsPlatformLogsSettings;
}
export interface GooglePubsubTopicArgsMessageStoragePolicy {
  allowed_persistence_regions: string[];
}
export interface GooglePubsubTopicArgsSchemaSettings {
  encoding?: string;
  schema: string;
}
export interface GooglePubsubTopicArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubTopicArgs {
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  message_retention_duration?: string;
  name: string;
  ingestion_data_source_settings: GooglePubsubTopicArgsIngestionDataSourceSettings;
  message_storage_policy: GooglePubsubTopicArgsMessageStoragePolicy;
  schema_settings: GooglePubsubTopicArgsSchemaSettings;
  timeouts: GooglePubsubTopicArgsTimeouts;
}
export class google_pubsub_topic extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubTopicArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_topic");
  }
}