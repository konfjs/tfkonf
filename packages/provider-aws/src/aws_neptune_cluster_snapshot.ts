import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
}
export interface AwsNeptuneClusterSnapshotArgs {
  db_cluster_identifier: string;
  db_cluster_snapshot_identifier: string;
  timeouts: Timeouts;
}
export class aws_neptune_cluster_snapshot extends TerraformResource {
  readonly allocated_storage!: number;
  readonly availability_zones!: string[];
  readonly db_cluster_snapshot_arn!: string;
  readonly engine!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly license_model!: string;
  readonly port!: number;
  readonly snapshot_type!: string;
  readonly source_db_cluster_snapshot_arn!: string;
  readonly status!: string;
  readonly storage_encrypted!: boolean;
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneClusterSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_cluster_snapshot");
  }
}