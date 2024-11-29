import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDocdbClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDocdbClusterInstanceArgs {
  apply_immediately?: boolean;
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  copy_tags_to_snapshot?: boolean;
  enable_performance_insights?: boolean;
  engine?: string;
  instance_class: string;
  promotion_tier?: number;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDocdbClusterInstanceArgsTimeouts;
}
export class aws_docdb_cluster_instance extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly ca_cert_identifier?: string;
  readonly db_subnet_group_name!: string;
  readonly dbi_resource_id!: string;
  readonly endpoint!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly identifier?: string;
  readonly identifier_prefix?: string;
  readonly kms_key_id!: string;
  readonly performance_insights_kms_key_id?: string;
  readonly port!: number;
  readonly preferred_backup_window!: string;
  readonly preferred_maintenance_window?: string;
  readonly publicly_accessible!: boolean;
  readonly storage_encrypted!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly writer!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbClusterInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_cluster_instance");
  }
}