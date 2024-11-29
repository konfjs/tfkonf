import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesis {
  aws_role_arn: string;
  consumer_arn: string;
  gcp_service_account: string;
  stream_arn: string;
}
export interface AvroFormat {}
export interface PubsubAvroFormat {}
export interface TextFormat {
  delimiter?: string;
}
export interface CloudStorage {
  bucket: string;
  match_glob?: string;
  minimum_object_create_time?: string;
  avro_format: AvroFormat;
  pubsub_avro_format: PubsubAvroFormat;
  text_format: TextFormat;
}
export interface PlatformLogsSettings {
  severity?: string;
}
export interface IngestionDataSourceSettings {
  aws_kinesis: AwsKinesis;
  cloud_storage: CloudStorage;
  platform_logs_settings: PlatformLogsSettings;
}
export interface MessageStoragePolicy {
  allowed_persistence_regions: string[];
}
export interface SchemaSettings {
  encoding?: string;
  schema: string;
}
export interface Timeouts {
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
  ingestion_data_source_settings: IngestionDataSourceSettings;
  message_storage_policy: MessageStoragePolicy;
  schema_settings: SchemaSettings;
  timeouts: Timeouts;
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