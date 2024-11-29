import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDocdbClusterSnapshotArgsTimeouts {
  create?: string;
}
export interface AwsDocdbClusterSnapshotArgs {
  db_cluster_identifier: string;
  db_cluster_snapshot_identifier: string;
  timeouts: AwsDocdbClusterSnapshotArgsTimeouts;
}
export class aws_docdb_cluster_snapshot extends TerraformResource {
  readonly availability_zones!: string[];
  readonly db_cluster_snapshot_arn!: string;
  readonly engine!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly port!: number;
  readonly snapshot_type!: string;
  readonly source_db_cluster_snapshot_arn!: string;
  readonly status!: string;
  readonly storage_encrypted!: boolean;
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDocdbClusterSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_docdb_cluster_snapshot");
  }
}