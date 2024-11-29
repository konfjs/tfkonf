import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupSelectionArgsconditionStringEquals {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsconditionStringLike {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsconditionStringNotEquals {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgsconditionStringNotLike {
  key: string;
  value: string;
}
export interface AwsBackupSelectionArgscondition {
  string_equals: AwsBackupSelectionArgsconditionStringEquals;
  string_like: AwsBackupSelectionArgsconditionStringLike;
  string_not_equals: AwsBackupSelectionArgsconditionStringNotEquals;
  string_not_like: AwsBackupSelectionArgsconditionStringNotLike;
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
  condition: AwsBackupSelectionArgscondition;
  selection_tag: AwsBackupSelectionArgsSelectionTag;
}
export class aws_backup_selection extends TerraformResource {
  readonly id?: string;
  readonly not_resources?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupSelectionArgs) {
    super(config, "resource", args, resourceName, "aws_backup_selection");
  }
}