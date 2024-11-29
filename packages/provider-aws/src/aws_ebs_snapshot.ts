import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEbsSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEbsSnapshotArgs {
  description?: string;
  outpost_arn?: string;
  permanent_restore?: boolean;
  tags?: {
    [key: string]: string;
  };
  temporary_restore_days?: number;
  volume_id: string;
  timeouts?: AwsEbsSnapshotArgsTimeouts;
}
export class aws_ebs_snapshot extends TerraformResource {
  readonly arn!: string;
  readonly data_encryption_key_id!: string;
  readonly encrypted!: boolean;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly owner_alias!: string;
  readonly owner_id!: string;
  readonly storage_tier?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly volume_size!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_snapshot");
  }
}