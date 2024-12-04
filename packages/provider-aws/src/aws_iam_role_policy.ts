import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamRolePolicyArgs {
  policy: string;
  role: string;
}

export class aws_iam_role_policy extends TerraformResource {
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIamRolePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_role_policy");
  }
}
