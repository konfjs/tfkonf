import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRdsClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRdsClusterInstanceArgs {
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  copy_tags_to_snapshot?: boolean;
  custom_iam_instance_profile?: string;
  engine: string;
  instance_class: string;
  monitoring_interval?: number;
  promotion_tier?: number;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsRdsClusterInstanceArgsTimeouts;
}
export class aws_rds_cluster_instance extends TerraformResource {
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly ca_cert_identifier?: string;
  readonly db_parameter_group_name?: string;
  readonly db_subnet_group_name?: string;
  readonly dbi_resource_id!: string;
  readonly endpoint!: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly id?: string;
  readonly identifier?: string;
  readonly identifier_prefix?: string;
  readonly kms_key_id!: string;
  readonly monitoring_role_arn?: string;
  readonly network_type!: string;
  readonly performance_insights_enabled?: boolean;
  readonly performance_insights_kms_key_id?: string;
  readonly performance_insights_retention_period?: number;
  readonly port!: number;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly publicly_accessible?: boolean;
  readonly storage_encrypted!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly writer!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster_instance");
  }
}