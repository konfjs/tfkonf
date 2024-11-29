import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupVaultPolicyArgs {
  backup_vault_name: string;
  policy: string;
}
export class aws_backup_vault_policy extends TerraformResource {
  readonly backup_vault_arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupVaultPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_backup_vault_policy");
  }
}