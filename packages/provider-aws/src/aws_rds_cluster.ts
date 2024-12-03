import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRdsClusterArgsRestoreToPointInTime {
  restore_to_time?: string;
  restore_type?: string;
  source_cluster_identifier?: string;
  source_cluster_resource_id?: string;
  use_latest_restorable_time?: boolean;
}
export interface AwsRdsClusterArgsS3Import {
  bucket_name: string;
  bucket_prefix?: string;
  ingestion_role: string;
  source_engine: string;
  source_engine_version: string;
}
export interface AwsRdsClusterArgsScalingConfiguration {
  auto_pause?: boolean;
  max_capacity?: number;
  min_capacity?: number;
  seconds_before_timeout?: number;
  seconds_until_auto_pause?: number;
  timeout_action?: string;
}
export interface AwsRdsClusterArgsServerlessv2ScalingConfiguration {
  max_capacity: number;
  min_capacity: number;
}
export interface AwsRdsClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRdsClusterArgs {
  allow_major_version_upgrade?: boolean;
  backtrack_window?: number;
  copy_tags_to_snapshot?: boolean;
  db_cluster_instance_class?: string;
  db_instance_parameter_group_name?: string;
  delete_automated_backups?: boolean;
  deletion_protection?: boolean;
  domain?: string;
  domain_iam_role_name?: string;
  enable_global_write_forwarding?: boolean;
  enable_http_endpoint?: boolean;
  enable_local_write_forwarding?: boolean;
  enabled_cloudwatch_logs_exports?: string[];
  engine: string;
  engine_mode?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  iops?: number;
  manage_master_user_password?: boolean;
  master_password?: string;
  performance_insights_enabled?: boolean;
  replication_source_identifier?: string;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  source_region?: string;
  tags?: {
    [key: string]: string;
  };
  restore_to_point_in_time: AwsRdsClusterArgsRestoreToPointInTime;
  s3_import: AwsRdsClusterArgsS3Import;
  scaling_configuration: AwsRdsClusterArgsScalingConfiguration;
  serverlessv2_scaling_configuration: AwsRdsClusterArgsServerlessv2ScalingConfiguration;
  timeouts?: AwsRdsClusterArgsTimeouts;
}
export class aws_rds_cluster extends TerraformResource {
  readonly allocated_storage?: number;
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zones?: string[];
  readonly backup_retention_period?: number;
  readonly ca_certificate_identifier?: string;
  readonly ca_certificate_valid_till!: string;
  readonly cluster_identifier?: string;
  readonly cluster_identifier_prefix?: string;
  readonly cluster_members?: string[];
  readonly cluster_resource_id!: string;
  readonly database_name?: string;
  readonly db_cluster_parameter_group_name?: string;
  readonly db_subnet_group_name?: string;
  readonly db_system_id?: string;
  readonly endpoint!: string;
  readonly engine_lifecycle_support?: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly hosted_zone_id!: string;
  readonly iam_roles?: string[];
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly master_user_secret!: any[];
  readonly master_user_secret_kms_key_id?: string;
  readonly master_username?: string;
  readonly network_type?: string;
  readonly performance_insights_kms_key_id?: string;
  readonly performance_insights_retention_period?: number;
  readonly port?: number;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly reader_endpoint!: string;
  readonly storage_encrypted?: boolean;
  readonly storage_type?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster");
  }
}