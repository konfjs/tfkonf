import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupSelectionArgsConditionStringEquals {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsConditionStringLike {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsConditionStringNotEquals {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsConditionStringNotLike {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsCondition {
  string_equals: AwsBackupSelectionArgsConditionStringEquals;
  string_like: AwsBackupSelectionArgsConditionStringLike;
  string_not_equals: AwsBackupSelectionArgsConditionStringNotEquals;
  string_not_like: AwsBackupSelectionArgsConditionStringNotLike;
}
export interface AwsBackupSelectionArgsSelectionTag {
  key: string;
  type: string;
  value: string;
}
export interface AwsBackupSelectionArgs {
  iam_role_arn: string;
  name: string;
  plan_id: string;
  resources?: string[];
  condition: AwsBackupSelectionArgsCondition;
  selection_tag: AwsBackupSelectionArgsSelectionTag;
}
export class aws_backup_selection extends TerraformResource {
  readonly id?: string;
  readonly not_resources?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupSelectionArgs) {
    super(config, "resource", args, resourceName, "aws_backup_selection");
  }
}