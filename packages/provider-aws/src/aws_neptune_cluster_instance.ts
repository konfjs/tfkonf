import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNeptuneClusterInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNeptuneClusterInstanceArgs {
  auto_minor_version_upgrade?: boolean;
  cluster_identifier: string;
  engine?: string;
  instance_class: string;
  port?: number;
  promotion_tier?: number;
  publicly_accessible?: boolean;
  skip_final_snapshot?: boolean;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsNeptuneClusterInstanceArgsTimeouts;
}
export class aws_neptune_cluster_instance extends TerraformResource {
  readonly address!: string;
  readonly apply_immediately?: boolean;
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly dbi_resource_id!: string;
  readonly endpoint!: string;
  readonly engine_version?: string;
  readonly id?: string;
  readonly identifier?: string;
  readonly identifier_prefix?: string;
  readonly kms_key_arn!: string;
  readonly neptune_parameter_group_name?: string;
  readonly neptune_subnet_group_name?: string;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly storage_encrypted!: boolean;
  readonly storage_type!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly writer!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneClusterInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_cluster_instance");
  }
}