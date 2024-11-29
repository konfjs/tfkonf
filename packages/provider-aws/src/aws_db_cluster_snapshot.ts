import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbClusterSnapshotArgstimeouts {
  create?: string;
}
export interface AwsDbClusterSnapshotArgs {
  db_cluster_identifier: string;
  db_cluster_snapshot_identifier: string;
  shared_accounts?: string[];
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDbClusterSnapshotArgstimeouts;
}
export class aws_db_cluster_snapshot extends TerraformResource {
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
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbClusterSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_db_cluster_snapshot");
  }
}