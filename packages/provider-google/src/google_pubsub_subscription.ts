import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GooglePubsubSubscriptionArgsBigqueryConfig {
  drop_unknown_fields?: boolean;
  service_account_email?: string;
  table: string;
  use_table_schema?: boolean;
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}
export interface GooglePubsubSubscriptionArgsCloudStorageConfigAvroConfig {
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}
export interface GooglePubsubSubscriptionArgsCloudStorageConfig {
  bucket: string;
  filename_datetime_format?: string;
  filename_prefix?: string;
  filename_suffix?: string;
  max_bytes?: number;
  max_duration?: string;
  max_messages?: number;
  service_account_email?: string;
  avro_config: GooglePubsubSubscriptionArgsCloudStorageConfigAvroConfig;
}
export interface GooglePubsubSubscriptionArgsDeadLetterPolicy {
  dead_letter_topic?: string;
  max_delivery_attempts?: number;
}
export interface GooglePubsubSubscriptionArgsExpirationPolicy {
  ttl: string;
}
export interface GooglePubsubSubscriptionArgsPushConfigNoWrapper {
  write_metadata: boolean;
}
export interface GooglePubsubSubscriptionArgsPushConfigOidcToken {
  audience?: string;
  service_account_email: string;
}
export interface GooglePubsubSubscriptionArgsPushConfig {
  attributes?: {
    [key: string]: string;
  };
  push_endpoint: string;
  no_wrapper: GooglePubsubSubscriptionArgsPushConfigNoWrapper;
  oidc_token: GooglePubsubSubscriptionArgsPushConfigOidcToken;
}
export interface GooglePubsubSubscriptionArgsRetryPolicy {}
export interface GooglePubsubSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubSubscriptionArgs {
  enable_exactly_once_delivery?: boolean;
  enable_message_ordering?: boolean;
  filter?: string;
  labels?: {
    [key: string]: string;
  };
  message_retention_duration?: string;
  name: string;
  retain_acked_messages?: boolean;
  topic: string;
  bigquery_config: GooglePubsubSubscriptionArgsBigqueryConfig;
  cloud_storage_config: GooglePubsubSubscriptionArgsCloudStorageConfig;
  dead_letter_policy: GooglePubsubSubscriptionArgsDeadLetterPolicy;
  expiration_policy: GooglePubsubSubscriptionArgsExpirationPolicy;
  push_config: GooglePubsubSubscriptionArgsPushConfig;
  retry_policy: GooglePubsubSubscriptionArgsRetryPolicy;
  timeouts: GooglePubsubSubscriptionArgsTimeouts;
}
export class google_pubsub_subscription extends TerraformResource {
  readonly ack_deadline_seconds?: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSubscriptionArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_subscription");
  }
}