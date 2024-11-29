import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketReplicationConfigurationArgsRuleDeleteMarkerReplication {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationAccessControlTranslation {
  owner: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationEncryptionConfiguration {
  replica_kms_key_id: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationMetricsEventThreshold {
  minutes: number;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationMetrics {
  status: string;
  event_threshold: AwsS3BucketReplicationConfigurationArgsRuleDestinationMetricsEventThreshold;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationReplicationTimeTime {
  minutes: number;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestinationReplicationTime {
  status: string;
  time: AwsS3BucketReplicationConfigurationArgsRuleDestinationReplicationTimeTime;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleDestination {
  account?: string;
  bucket: string;
  storage_class?: string;
  access_control_translation: AwsS3BucketReplicationConfigurationArgsRuleDestinationAccessControlTranslation;
  encryption_configuration: AwsS3BucketReplicationConfigurationArgsRuleDestinationEncryptionConfiguration;
  metrics: AwsS3BucketReplicationConfigurationArgsRuleDestinationMetrics;
  replication_time: AwsS3BucketReplicationConfigurationArgsRuleDestinationReplicationTime;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleExistingObjectReplication {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleFilterAnd {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketReplicationConfigurationArgsRuleFilterTag {
  key: string;
  value: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleFilter {
  prefix?: string;
  and: AwsS3BucketReplicationConfigurationArgsRuleFilterAnd;
  tag: AwsS3BucketReplicationConfigurationArgsRuleFilterTag;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteriaReplicaModifications {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteriaSseKmsEncryptedObjects {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteria {
  replica_modifications: AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteriaReplicaModifications;
  sse_kms_encrypted_objects: AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export interface AwsS3BucketReplicationConfigurationArgsRule {
  prefix?: string;
  priority?: number;
  status: string;
  delete_marker_replication: AwsS3BucketReplicationConfigurationArgsRuleDeleteMarkerReplication;
  destination: AwsS3BucketReplicationConfigurationArgsRuleDestination;
  existing_object_replication: AwsS3BucketReplicationConfigurationArgsRuleExistingObjectReplication;
  filter: AwsS3BucketReplicationConfigurationArgsRuleFilter;
  source_selection_criteria: AwsS3BucketReplicationConfigurationArgsRuleSourceSelectionCriteria;
}
export interface AwsS3BucketReplicationConfigurationArgs {
  bucket: string;
  role: string;
  token?: string;
  rule: AwsS3BucketReplicationConfigurationArgsRule;
}
export class aws_s3_bucket_replication_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_replication_configuration");
  }
}