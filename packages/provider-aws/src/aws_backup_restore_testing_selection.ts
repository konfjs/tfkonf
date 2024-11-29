import { TerraformConfig, TerraformResource } from "tfs";
export interface StringEquals {
  key: string;
  value: string;
}
export interface StringNotEquals {
  key: string;
  value: string;
}
export interface ProtectedResourceConditions {
  string_equals: StringEquals;
  string_not_equals: StringNotEquals;
}
export interface AwsBackupRestoreTestingSelectionArgs {
  iam_role_arn: string;
  name: string;
  protected_resource_type: string;
  restore_testing_plan_name: string;
  protected_resource_conditions: ProtectedResourceConditions;
}
export class aws_backup_restore_testing_selection extends TerraformResource {
  readonly protected_resource_arns?: string[];
  readonly restore_metadata_overrides?: {
    [key: string]: string;
  };
  readonly validation_window_hours?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupRestoreTestingSelectionArgs) {
    super(config, "resource", args, resourceName, "aws_backup_restore_testing_selection");
  }
}