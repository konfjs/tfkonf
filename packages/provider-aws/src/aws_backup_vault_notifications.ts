import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBackupVaultNotificationsArgs {
  backup_vault_events: string[];
  backup_vault_name: string;
  sns_topic_arn: string;
}
export class aws_backup_vault_notifications extends TerraformResource {
  readonly backup_vault_arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupVaultNotificationsArgs) {
    super(config, "resource", args, resourceName, "aws_backup_vault_notifications");
  }
}