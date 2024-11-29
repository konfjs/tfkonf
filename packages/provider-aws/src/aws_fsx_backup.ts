import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFsxBackupArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsFsxBackupArgs {
  file_system_id?: string;
  tags?: {
    [key: string]: string;
  };
  volume_id?: string;
  timeouts: AwsFsxBackupArgstimeouts;
}
export class aws_fsx_backup extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxBackupArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_backup");
  }
}