import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftClusterArgsLogging {
  enable: boolean;
  log_destination_type?: string;
  log_exports?: string[];
}
export interface AwsRedshiftClusterArgsSnapshotCopy {
  destination_region: string;
  grant_name?: string;
  retention_period?: number;
}
export interface AwsRedshiftClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRedshiftClusterArgs {
  allow_version_upgrade?: boolean;
  apply_immediately?: boolean;
  automated_snapshot_retention_period?: number;
  availability_zone_relocation_enabled?: boolean;
  cluster_identifier: string;
  cluster_version?: string;
  elastic_ip?: string;
  encrypted?: boolean;
  final_snapshot_identifier?: string;
  maintenance_track_name?: string;
  manage_master_password?: boolean;
  manual_snapshot_retention_period?: number;
  master_password?: string;
  master_username?: string;
  multi_az?: boolean;
  node_type: string;
  number_of_nodes?: number;
  owner_account?: string;
  port?: number;
  publicly_accessible?: boolean;
  skip_final_snapshot?: boolean;
  snapshot_arn?: string;
  snapshot_cluster_identifier?: string;
  snapshot_identifier?: string;
  tags?: {
    [key: string]: string;
  };
  logging: AwsRedshiftClusterArgsLogging;
  snapshot_copy: AwsRedshiftClusterArgsSnapshotCopy;
  timeouts?: AwsRedshiftClusterArgsTimeouts;
}
export class aws_redshift_cluster extends TerraformResource {
  readonly aqua_configuration_status?: string;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly cluster_namespace_arn!: string;
  readonly cluster_nodes!: any[];
  readonly cluster_parameter_group_name?: string;
  readonly cluster_public_key?: string;
  readonly cluster_revision_number?: string;
  readonly cluster_subnet_group_name?: string;
  readonly cluster_type?: string;
  readonly database_name?: string;
  readonly default_iam_role_arn?: string;
  readonly dns_name!: string;
  readonly endpoint?: string;
  readonly enhanced_vpc_routing?: boolean;
  readonly iam_roles?: string[];
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly master_password_secret_arn!: string;
  readonly master_password_secret_kms_key_id?: string;
  readonly preferred_maintenance_window?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftClusterArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_cluster");
  }
}