import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNeptuneGlobalClusterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNeptuneGlobalClusterArgs {
  deletion_protection?: boolean;
  global_cluster_identifier: string;
  timeouts: AwsNeptuneGlobalClusterArgstimeouts;
}
export class aws_neptune_global_cluster extends TerraformResource {
  readonly arn!: string;
  readonly engine?: string;
  readonly engine_version?: string;
  readonly global_cluster_members!: any[];
  readonly global_cluster_resource_id!: string;
  readonly id?: string;
  readonly source_db_cluster_identifier?: string;
  readonly status!: string;
  readonly storage_encrypted?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneGlobalClusterArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_global_cluster");
  }
}