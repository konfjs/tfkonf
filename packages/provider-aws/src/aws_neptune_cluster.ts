import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNeptuneClusterArgsServerlessV2ScalingConfiguration {
  max_capacity?: number;
  min_capacity?: number;
}
export interface AwsNeptuneClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNeptuneClusterArgs {
  backup_retention_period?: number;
  copy_tags_to_snapshot?: boolean;
  deletion_protection?: boolean;
  enable_cloudwatch_logs_exports?: string[];
  engine?: string;
  final_snapshot_identifier?: string;
  global_cluster_identifier?: string;
  iam_database_authentication_enabled?: boolean;
  iam_roles?: string[];
  neptune_instance_parameter_group_name?: string;
  port?: number;
  replication_source_identifier?: string;
  skip_final_snapshot?: boolean;
  snapshot_identifier?: string;
  storage_encrypted?: boolean;
  tags?: {
    [key: string]: string;
  };
  serverless_v2_scaling_configuration: AwsNeptuneClusterArgsServerlessV2ScalingConfiguration;
  timeouts?: AwsNeptuneClusterArgsTimeouts;
}
export class aws_neptune_cluster extends TerraformResource {
  readonly allow_major_version_upgrade?: boolean;
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zones?: string[];
  readonly cluster_identifier?: string;
  readonly cluster_identifier_prefix?: string;
  readonly cluster_members!: string[];
  readonly cluster_resource_id!: string;
  readonly endpoint!: string;
  readonly engine_version?: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly neptune_cluster_parameter_group_name?: string;
  readonly neptune_subnet_group_name?: string;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly reader_endpoint!: string;
  readonly storage_type?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneClusterArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_cluster");
  }
}