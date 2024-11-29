import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupPlanArgsAdvancedBackupSetting {
  backup_options: {
    [key: string]: string;
  };
  resource_type: string;
}
export interface AwsBackupPlanArgsruleCopyActionlifecycle {
  cold_storage_after?: number;
  delete_after?: number;
}
export interface AwsBackupPlanArgsruleCopyAction {
  destination_vault_arn: string;
  lifecycle: AwsBackupPlanArgsruleCopyActionlifecycle;
}
export interface AwsBackupPlanArgsrulelifecycle {
  cold_storage_after?: number;
  delete_after?: number;
}
export interface AwsBackupPlanArgsrule {
  completion_window?: number;
  enable_continuous_backup?: boolean;
  recovery_point_tags?: {
    [key: string]: string;
  };
  rule_name: string;
  schedule?: string;
  schedule_expression_timezone?: string;
  start_window?: number;
  target_vault_name: string;
  copy_action: AwsBackupPlanArgsruleCopyAction;
  lifecycle: AwsBackupPlanArgsrulelifecycle;
}
export interface AwsBackupPlanArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  advanced_backup_setting: AwsBackupPlanArgsAdvancedBackupSetting;
  rule: AwsBackupPlanArgsrule;
}
export class aws_backup_plan extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupPlanArgs) {
    super(config, "resource", args, resourceName, "aws_backup_plan");
  }
}