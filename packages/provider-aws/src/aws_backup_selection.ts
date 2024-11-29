import { TerraformConfig, TerraformResource } from "tfs";
export interface StringEquals {
  key: string;
  value: string;
}
export interface StringLike {
  key: string;
  value: string;
}
export interface StringNotEquals {
  key: string;
  value: string;
}
export interface StringNotLike {
  key: string;
  value: string;
}
export interface Condition {
  string_equals: StringEquals;
  string_like: StringLike;
  string_not_equals: StringNotEquals;
  string_not_like: StringNotLike;
}
export interface SelectionTag {
  key: string;
  type: string;
  value: string;
}
export interface AwsBackupSelectionArgs {
  iam_role_arn: string;
  name: string;
  plan_id: string;
  resources?: string[];
  condition: Condition;
  selection_tag: SelectionTag;
}
export class aws_backup_selection extends TerraformResource {
  readonly id?: string;
  readonly not_resources?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupSelectionArgs) {
    super(config, "resource", args, resourceName, "aws_backup_selection");
  }
}