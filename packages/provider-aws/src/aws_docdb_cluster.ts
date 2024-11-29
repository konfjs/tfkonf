import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDocdbClusterArgsRestoreToPointInTime {
  restore_to_time?: string;
  restore_type?: string;
  source_cluster_identifier: string;
  use_latest_restorable_time?: boolean;
}
export interface AwsDocdbClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDocdbClusterArgs {
  allow_major_version_upgrade?: boolean;
  apply_immediately?: boolean;
  backup_retention_period?: number;
  deletion_protection?: boolean;
  enabled_cloudwatch_logs_exports?: string[];
  engine?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  master_password?: string;
  port?: number;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  storage_encrypted?: boolean;
  storage_type?: string;
  tags?: {
    [key: string]: string;
  };
  restore_to_point_in_time: AwsDocdbClusterArgsRestoreToPointInTime;
  timeouts: AwsDocdbClusterArgsTimeouts;
}
export class aws_docdb_cluster extends TerraformResource {
  readonly arn!: string;
  readonly availability_zones?: string[];
  readonly cluster_identifier?: string;
  readonly cluster_identifier_prefix?: string;
  readonly cluster_members?: string[];
  readonly cluster_resource_id!: string;
  readonly db_cluster_parameter_group_name?: string;
  readonly db_subnet_group_name?: string;
  readonly endpoint!: string;
  readonly engine_version?: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly master_username?: string;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly reader_endpoint!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbClusterArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_cluster");
  }
}