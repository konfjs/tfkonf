import { TerraformConfig, TerraformResource } from "tfs";
export interface BigqueryConfig {
  drop_unknown_fields?: boolean;
  service_account_email?: string;
  table: string;
  use_table_schema?: boolean;
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}
export interface AvroConfig {
  use_topic_schema?: boolean;
  write_metadata?: boolean;
}
export interface CloudStorageConfig {
  bucket: string;
  filename_datetime_format?: string;
  filename_prefix?: string;
  filename_suffix?: string;
  max_bytes?: number;
  max_duration?: string;
  max_messages?: number;
  service_account_email?: string;
  avro_config: AvroConfig;
}
export interface DeadLetterPolicy {
  dead_letter_topic?: string;
  max_delivery_attempts?: number;
}
export interface ExpirationPolicy {
  ttl: string;
}
export interface NoWrapper {
  write_metadata: boolean;
}
export interface OidcToken {
  audience?: string;
  service_account_email: string;
}
export interface PushConfig {
  attributes?: {
    [key: string]: string;
  };
  push_endpoint: string;
  no_wrapper: NoWrapper;
  oidc_token: OidcToken;
}
export interface RetryPolicy {}
export interface Timeouts {
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
  bigquery_config: BigqueryConfig;
  cloud_storage_config: CloudStorageConfig;
  dead_letter_policy: DeadLetterPolicy;
  expiration_policy: ExpirationPolicy;
  push_config: PushConfig;
  retry_policy: RetryPolicy;
  timeouts: Timeouts;
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