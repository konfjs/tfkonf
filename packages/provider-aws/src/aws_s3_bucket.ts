import { TerraformConfig, TerraformResource } from "tfs";
export interface CorsRule {
  allowed_headers?: string[];
  allowed_methods: string[];
  allowed_origins: string[];
  expose_headers?: string[];
  max_age_seconds?: number;
}
export interface Grant {
  id?: string;
  permissions: string[];
  type: string;
  uri?: string;
}
export interface Expiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}
export interface NoncurrentVersionExpiration {
  days?: number;
}
export interface NoncurrentVersionTransition {
  days?: number;
  storage_class: string;
}
export interface Transition {
  date?: string;
  days?: number;
  storage_class: string;
}
export interface LifecycleRule {
  abort_incomplete_multipart_upload_days?: number;
  enabled: boolean;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
  expiration: Expiration;
  noncurrent_version_expiration: NoncurrentVersionExpiration;
  noncurrent_version_transition: NoncurrentVersionTransition;
  transition: Transition;
}
export interface Logging {
  target_bucket: string;
  target_prefix?: string;
}
export interface DefaultRetention {
  days?: number;
  mode: string;
  years?: number;
}
export interface Rule {
  default_retention: DefaultRetention;
}
export interface ObjectLockConfiguration {
  object_lock_enabled?: string;
  rule: Rule;
}
export interface AccessControlTranslation {
  owner: string;
}
export interface Metrics {
  minutes?: number;
  status?: string;
}
export interface ReplicationTime {
  minutes?: number;
  status?: string;
}
export interface Destination {
  account_id?: string;
  bucket: string;
  replica_kms_key_id?: string;
  storage_class?: string;
  access_control_translation: AccessControlTranslation;
  metrics: Metrics;
  replication_time: ReplicationTime;
}
export interface Filter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface SseKmsEncryptedObjects {
  enabled: boolean;
}
export interface SourceSelectionCriteria {
  sse_kms_encrypted_objects: SseKmsEncryptedObjects;
}
export interface Rules {
  delete_marker_replication_status?: string;
  id?: string;
  prefix?: string;
  priority?: number;
  status: string;
  destination: Destination;
  filter: Filter;
  source_selection_criteria: SourceSelectionCriteria;
}
export interface ReplicationConfiguration {
  role: string;
  rules: Rules;
}
export interface ApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}
export interface Rule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: ApplyServerSideEncryptionByDefault;
}
export interface ServerSideEncryptionConfiguration {
  rule: Rule;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface Versioning {
  enabled?: boolean;
  mfa_delete?: boolean;
}
export interface Website {
  error_document?: string;
  index_document?: string;
  redirect_all_requests_to?: string;
  routing_rules?: string;
}
export interface AwsS3BucketArgs {
  force_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
  cors_rule: CorsRule;
  grant: Grant;
  lifecycle_rule: LifecycleRule;
  logging: Logging;
  object_lock_configuration: ObjectLockConfiguration;
  replication_configuration: ReplicationConfiguration;
  server_side_encryption_configuration: ServerSideEncryptionConfiguration;
  timeouts: Timeouts;
  versioning: Versioning;
  website: Website;
}
export class aws_s3_bucket extends TerraformResource {
  readonly acceleration_status?: string;
  readonly acl?: string;
  readonly arn!: string;
  readonly bucket?: string;
  readonly bucket_domain_name!: string;
  readonly bucket_prefix?: string;
  readonly bucket_regional_domain_name!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly object_lock_enabled?: boolean;
  readonly policy?: string;
  readonly region!: string;
  readonly request_payer?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly website_domain!: string;
  readonly website_endpoint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket");
  }
}