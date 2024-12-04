import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDbSnapshotCopyArgsTimeouts {
  create?: string;
}

export interface AwsDbSnapshotCopyArgs {
  copy_tags?: boolean;
  destination_region?: string;
  kms_key_id?: string;
  presigned_url?: string;
  shared_accounts?: string[];
  source_db_snapshot_identifier: string;
  tags?: { [key: string]: string };
  target_custom_availability_zone?: string;
  target_db_snapshot_identifier: string;
  timeouts?: AwsDbSnapshotCopyArgsTimeouts;
}

export class aws_db_snapshot_copy extends TerraformResource {
  readonly allocated_storage!: number;
  readonly availability_zone!: string;
  readonly db_snapshot_arn!: string;
  readonly encrypted!: boolean;
  readonly engine!: string;
  readonly engine_version!: string;
  readonly id?: string;
  readonly iops!: number;
  readonly license_model!: string;
  readonly option_group_name?: string;
  readonly port!: number;
  readonly snapshot_type!: string;
  readonly source_region!: string;
  readonly storage_type!: string;
  readonly tags_all?: { [key: string]: string };
  readonly vpc_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDbSnapshotCopyArgs) {
    super(config, "resource", args, resourceName, "aws_db_snapshot_copy");
  }
}
