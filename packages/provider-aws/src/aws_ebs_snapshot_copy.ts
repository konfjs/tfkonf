import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEbsSnapshotCopyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEbsSnapshotCopyArgs {
  description?: string;
  encrypted?: boolean;
  kms_key_id?: string;
  permanent_restore?: boolean;
  source_region: string;
  source_snapshot_id: string;
  tags?: {
    [key: string]: string;
  };
  temporary_restore_days?: number;
  timeouts: AwsEbsSnapshotCopyArgsTimeouts;
}
export class aws_ebs_snapshot_copy extends TerraformResource {
  readonly arn!: string;
  readonly data_encryption_key_id!: string;
  readonly id?: string;
  readonly outpost_arn!: string;
  readonly owner_alias!: string;
  readonly owner_id!: string;
  readonly storage_tier?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly volume_id!: string;
  readonly volume_size!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsSnapshotCopyArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_snapshot_copy");
  }
}