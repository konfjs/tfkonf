import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupVaultArgstimeouts {
  delete?: string;
}
export interface AwsBackupVaultArgs {
  force_destroy?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsBackupVaultArgstimeouts;
}
export class aws_backup_vault extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly recovery_points!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupVaultArgs) {
    super(config, "resource", args, resourceName, "aws_backup_vault");
  }
}