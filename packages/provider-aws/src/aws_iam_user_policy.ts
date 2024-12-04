import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPolicyArgs {
  policy: string;
  user: string;
}

export class aws_iam_user_policy extends TerraformResource {
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_policy");
  }
}
