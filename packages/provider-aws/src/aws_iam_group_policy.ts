import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamGroupPolicyArgs {
  group: string;
  policy: string;
}
export class aws_iam_group_policy extends TerraformResource {
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group_policy");
  }
}