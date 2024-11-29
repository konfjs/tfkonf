import { TerraformConfig, TerraformResource } from "tfs";
export interface ClientData {
  comment?: string;
}
export interface UserBucket {
  s3_bucket: string;
  s3_key: string;
}
export interface DiskContainer {
  description?: string;
  format: string;
  url?: string;
  user_bucket: UserBucket;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEbsSnapshotImportArgs {
  encrypted?: boolean;
  kms_key_id?: string;
  permanent_restore?: boolean;
  role_name?: string;
  tags?: {
    [key: string]: string;
  };
  temporary_restore_days?: number;
  client_data: ClientData;
  disk_container: DiskContainer;
  timeouts: Timeouts;
}
export class aws_ebs_snapshot_import extends TerraformResource {
  readonly arn!: string;
  readonly data_encryption_key_id!: string;
  readonly description?: string;
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
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsSnapshotImportArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_snapshot_import");
  }
}