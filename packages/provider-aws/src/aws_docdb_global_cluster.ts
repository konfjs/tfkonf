import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDocdbGlobalClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDocdbGlobalClusterArgs {
  database_name?: string;
  deletion_protection?: boolean;
  global_cluster_identifier: string;
  timeouts?: AwsDocdbGlobalClusterArgsTimeouts;
}

export class aws_docdb_global_cluster extends TerraformResource {
  readonly arn!: string;
  readonly engine?: string;
  readonly engine_version?: string;
  readonly global_cluster_members!: any[];
  readonly global_cluster_resource_id!: string;
  readonly id?: string;
  readonly source_db_cluster_identifier?: string;
  readonly status!: string;
  readonly storage_encrypted?: boolean;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbGlobalClusterArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_global_cluster");
  }
}
