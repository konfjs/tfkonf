import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketReplicationConfigurationArgsruleDeleteMarkerReplication {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationAccessControlTranslation {
  owner: string;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationEncryptionConfiguration {
  replica_kms_key_id: string;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationmetricsEventThreshold {
  minutes: number;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationmetrics {
  status: string;
  event_threshold: AwsS3BucketReplicationConfigurationArgsruledestinationmetricsEventThreshold;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationReplicationTimetime {
  minutes: number;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestinationReplicationTime {
  status: string;
  time: AwsS3BucketReplicationConfigurationArgsruledestinationReplicationTimetime;
}
export interface AwsS3BucketReplicationConfigurationArgsruledestination {
  account?: string;
  bucket: string;
  storage_class?: string;
  access_control_translation: AwsS3BucketReplicationConfigurationArgsruledestinationAccessControlTranslation;
  encryption_configuration: AwsS3BucketReplicationConfigurationArgsruledestinationEncryptionConfiguration;
  metrics: AwsS3BucketReplicationConfigurationArgsruledestinationmetrics;
  replication_time: AwsS3BucketReplicationConfigurationArgsruledestinationReplicationTime;
}
export interface AwsS3BucketReplicationConfigurationArgsruleExistingObjectReplication {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsrulefilterand {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketReplicationConfigurationArgsrulefiltertag {
  key: string;
  value: string;
}
export interface AwsS3BucketReplicationConfigurationArgsrulefilter {
  prefix?: string;
  and: AwsS3BucketReplicationConfigurationArgsrulefilterand;
  tag: AwsS3BucketReplicationConfigurationArgsrulefiltertag;
}
export interface AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteriaReplicaModifications {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteriaSseKmsEncryptedObjects {
  status: string;
}
export interface AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteria {
  replica_modifications: AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteriaReplicaModifications;
  sse_kms_encrypted_objects: AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export interface AwsS3BucketReplicationConfigurationArgsrule {
  prefix?: string;
  priority?: number;
  status: string;
  delete_marker_replication: AwsS3BucketReplicationConfigurationArgsruleDeleteMarkerReplication;
  destination: AwsS3BucketReplicationConfigurationArgsruledestination;
  existing_object_replication: AwsS3BucketReplicationConfigurationArgsruleExistingObjectReplication;
  filter: AwsS3BucketReplicationConfigurationArgsrulefilter;
  source_selection_criteria: AwsS3BucketReplicationConfigurationArgsruleSourceSelectionCriteria;
}
export interface AwsS3BucketReplicationConfigurationArgs {
  bucket: string;
  role: string;
  token?: string;
  rule: AwsS3BucketReplicationConfigurationArgsrule;
}
export class aws_s3_bucket_replication_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_replication_configuration");
  }
}