import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupVaultLockConfigurationArgs {
  backup_vault_name: string;
  changeable_for_days?: number;
  max_retention_days?: number;
  min_retention_days?: number;
}

export class aws_backup_vault_lock_configuration extends TerraformResource {
  readonly backup_vault_arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupVaultLockConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_backup_vault_lock_configuration");
  }
}
