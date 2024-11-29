import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketArgsCorsRule {
  allowed_headers?: string[];
  allowed_methods: string[];
  allowed_origins: string[];
  expose_headers?: string[];
  max_age_seconds?: number;
}
export interface AwsS3BucketArgsgrant {
  id?: string;
  permissions: string[];
  type: string;
  uri?: string;
}
export interface AwsS3BucketArgsLifecycleRuleexpiration {
  date?: string;
  days?: number;
  expired_object_delete_marker?: boolean;
}
export interface AwsS3BucketArgsLifecycleRuleNoncurrentVersionExpiration {
  days?: number;
}
export interface AwsS3BucketArgsLifecycleRuleNoncurrentVersionTransition {
  days?: number;
  storage_class: string;
}
export interface AwsS3BucketArgsLifecycleRuletransition {
  date?: string;
  days?: number;
  storage_class: string;
}
export interface AwsS3BucketArgsLifecycleRule {
  abort_incomplete_multipart_upload_days?: number;
  enabled: boolean;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
  expiration: AwsS3BucketArgsLifecycleRuleexpiration;
  noncurrent_version_expiration: AwsS3BucketArgsLifecycleRuleNoncurrentVersionExpiration;
  noncurrent_version_transition: AwsS3BucketArgsLifecycleRuleNoncurrentVersionTransition;
  transition: AwsS3BucketArgsLifecycleRuletransition;
}
export interface AwsS3BucketArgslogging {
  target_bucket: string;
  target_prefix?: string;
}
export interface AwsS3BucketArgsObjectLockConfigurationruleDefaultRetention {
  days?: number;
  mode: string;
  years?: number;
}
export interface AwsS3BucketArgsObjectLockConfigurationrule {
  default_retention: AwsS3BucketArgsObjectLockConfigurationruleDefaultRetention;
}
export interface AwsS3BucketArgsObjectLockConfiguration {
  object_lock_enabled?: string;
  rule: AwsS3BucketArgsObjectLockConfigurationrule;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesdestinationAccessControlTranslation {
  owner: string;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesdestinationmetrics {
  minutes?: number;
  status?: string;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesdestinationReplicationTime {
  minutes?: number;
  status?: string;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesdestination {
  account_id?: string;
  bucket: string;
  replica_kms_key_id?: string;
  storage_class?: string;
  access_control_translation: AwsS3BucketArgsReplicationConfigurationrulesdestinationAccessControlTranslation;
  metrics: AwsS3BucketArgsReplicationConfigurationrulesdestinationmetrics;
  replication_time: AwsS3BucketArgsReplicationConfigurationrulesdestinationReplicationTime;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesfilter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketArgsReplicationConfigurationrulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  enabled: boolean;
}
export interface AwsS3BucketArgsReplicationConfigurationrulesSourceSelectionCriteria {
  sse_kms_encrypted_objects: AwsS3BucketArgsReplicationConfigurationrulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export interface AwsS3BucketArgsReplicationConfigurationrules {
  delete_marker_replication_status?: string;
  id?: string;
  prefix?: string;
  priority?: number;
  status: string;
  destination: AwsS3BucketArgsReplicationConfigurationrulesdestination;
  filter: AwsS3BucketArgsReplicationConfigurationrulesfilter;
  source_selection_criteria: AwsS3BucketArgsReplicationConfigurationrulesSourceSelectionCriteria;
}
export interface AwsS3BucketArgsReplicationConfiguration {
  role: string;
  rules: AwsS3BucketArgsReplicationConfigurationrules;
}
export interface AwsS3BucketArgsServerSideEncryptionConfigurationruleApplyServerSideEncryptionByDefault {
  kms_master_key_id?: string;
  sse_algorithm: string;
}
export interface AwsS3BucketArgsServerSideEncryptionConfigurationrule {
  bucket_key_enabled?: boolean;
  apply_server_side_encryption_by_default: AwsS3BucketArgsServerSideEncryptionConfigurationruleApplyServerSideEncryptionByDefault;
}
export interface AwsS3BucketArgsServerSideEncryptionConfiguration {
  rule: AwsS3BucketArgsServerSideEncryptionConfigurationrule;
}
export interface AwsS3BucketArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsS3BucketArgsversioning {
  enabled?: boolean;
  mfa_delete?: boolean;
}
export interface AwsS3BucketArgswebsite {
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
  cors_rule: AwsS3BucketArgsCorsRule;
  grant: AwsS3BucketArgsgrant;
  lifecycle_rule: AwsS3BucketArgsLifecycleRule;
  logging: AwsS3BucketArgslogging;
  object_lock_configuration: AwsS3BucketArgsObjectLockConfiguration;
  replication_configuration: AwsS3BucketArgsReplicationConfiguration;
  server_side_encryption_configuration: AwsS3BucketArgsServerSideEncryptionConfiguration;
  timeouts: AwsS3BucketArgstimeouts;
  versioning: AwsS3BucketArgsversioning;
  website: AwsS3BucketArgswebsite;
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