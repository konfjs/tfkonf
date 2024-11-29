import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbSnapshotArgstimeouts {
  create?: string;
}
export interface AwsDbSnapshotArgs {
  db_instance_identifier: string;
  db_snapshot_identifier: string;
  shared_accounts?: string[];
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDbSnapshotArgstimeouts;
}
export class aws_db_snapshot extends TerraformResource {
  readonly allocated_storage!: number;
  readonly availability_zone!: string;
  readonly db_snapshot_arn!: string;
  readonly encrypted!: boolean;
  readonly engine!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly iops!: number;
  readonly kms_key_id!: string;
  readonly license_model!: string;
  readonly option_group_name!: string;
  readonly port!: number;
  readonly snapshot_type!: string;
  readonly source_db_snapshot_identifier!: string;
  readonly source_region!: string;
  readonly status!: string;
  readonly storage_type!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_db_snapshot");
  }
}