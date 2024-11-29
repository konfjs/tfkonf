import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBackupRestoreTestingPlanArgsRecoveryPointSelection {
  algorithm: string;
  include_vaults: string[];
  recovery_point_types: string[];
}
export interface AwsBackupRestoreTestingPlanArgs {
  name: string;
  schedule_expression: string;
  tags?: {
    [key: string]: string;
  };
  recovery_point_selection: AwsBackupRestoreTestingPlanArgsRecoveryPointSelection;
}
export class aws_backup_restore_testing_plan extends TerraformResource {
  readonly arn!: string;
  readonly schedule_expression_timezone?: string;
  readonly start_window_hours?: number;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupRestoreTestingPlanArgs) {
    super(config, "resource", args, resourceName, "aws_backup_restore_testing_plan");
  }
}