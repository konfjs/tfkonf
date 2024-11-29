import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRdsGlobalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRdsGlobalClusterArgs {
  database_name?: string;
  deletion_protection?: boolean;
  force_destroy?: boolean;
  global_cluster_identifier: string;
  timeouts: AwsRdsGlobalClusterArgsTimeouts;
}
export class aws_rds_global_cluster extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly engine?: string;
  readonly engine_lifecycle_support?: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly global_cluster_members!: any[];
  readonly global_cluster_resource_id!: string;
  readonly id?: string;
  readonly source_db_cluster_identifier?: string;
  readonly storage_encrypted?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsGlobalClusterArgs) {
    super(config, "resource", args, resourceName, "aws_rds_global_cluster");
  }
}