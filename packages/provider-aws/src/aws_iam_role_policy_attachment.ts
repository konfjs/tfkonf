import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamRolePolicyAttachmentArgs {
  policy_arn: string;
  role: string;
}
export class aws_iam_role_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamRolePolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iam_role_policy_attachment");
  }
}