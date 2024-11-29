import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDocdbelasticClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDocdbelasticClusterArgs {
  admin_user_name: string;
  admin_user_password: string;
  auth_type: string;
  name: string;
  shard_capacity: number;
  shard_count: number;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsDocdbelasticClusterArgsTimeouts;
}
export class aws_docdbelastic_cluster extends TerraformResource {
  readonly arn!: string;
  readonly backup_retention_period?: number;
  readonly endpoint!: string;
  readonly id!: string;
  readonly kms_key_id?: string;
  readonly preferred_backup_window?: string;
  readonly preferred_maintenance_window?: string;
  readonly subnet_ids?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbelasticClusterArgs) {
    super(config, "resource", args, resourceName, "aws_docdbelastic_cluster");
  }
}