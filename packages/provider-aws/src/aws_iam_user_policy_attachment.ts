import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamUserPolicyAttachmentArgs {
  policy_arn: string;
  user: string;
}
export class aws_iam_user_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_policy_attachment");
  }
}