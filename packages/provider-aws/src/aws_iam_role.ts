import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamRoleArgsInlinePolicy {
  name?: string;
  policy?: string;
}
export interface AwsIamRoleArgs {
  assume_role_policy: string;
  description?: string;
  force_detach_policies?: boolean;
  max_session_duration?: number;
  path?: string;
  permissions_boundary?: string;
  tags?: {
    [key: string]: string;
  };
  inline_policy: AwsIamRoleArgsInlinePolicy;
}
export class aws_iam_role extends TerraformResource {
  readonly arn!: string;
  readonly create_date!: string;
  readonly id?: string;
  readonly managed_policy_arns?: string[];
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly unique_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamRoleArgs) {
    super(config, "resource", args, resourceName, "aws_iam_role");
  }
}