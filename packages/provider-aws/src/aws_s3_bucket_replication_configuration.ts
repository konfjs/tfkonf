import { TerraformConfig, TerraformResource } from "tfs";
export interface DeleteMarkerReplication {
  status: string;
}
export interface AccessControlTranslation {
  owner: string;
}
export interface EncryptionConfiguration {
  replica_kms_key_id: string;
}
export interface EventThreshold {
  minutes: number;
}
export interface Metrics {
  status: string;
  event_threshold: EventThreshold;
}
export interface Time {
  minutes: number;
}
export interface ReplicationTime {
  status: string;
  time: Time;
}
export interface Destination {
  account?: string;
  bucket: string;
  storage_class?: string;
  access_control_translation: AccessControlTranslation;
  encryption_configuration: EncryptionConfiguration;
  metrics: Metrics;
  replication_time: ReplicationTime;
}
export interface ExistingObjectReplication {
  status: string;
}
export interface And {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface Tag {
  key: string;
  value: string;
}
export interface Filter {
  prefix?: string;
  and: And;
  tag: Tag;
}
export interface ReplicaModifications {
  status: string;
}
export interface SseKmsEncryptedObjects {
  status: string;
}
export interface SourceSelectionCriteria {
  replica_modifications: ReplicaModifications;
  sse_kms_encrypted_objects: SseKmsEncryptedObjects;
}
export interface Rule {
  prefix?: string;
  priority?: number;
  status: string;
  delete_marker_replication: DeleteMarkerReplication;
  destination: Destination;
  existing_object_replication: ExistingObjectReplication;
  filter: Filter;
  source_selection_criteria: SourceSelectionCriteria;
}
export interface AwsS3BucketReplicationConfigurationArgs {
  bucket: string;
  role: string;
  token?: string;
  rule: Rule;
}
export class aws_s3_bucket_replication_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_replication_configuration");
  }
}