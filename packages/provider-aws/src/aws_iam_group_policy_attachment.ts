import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPolicyAttachmentArgs {
  group: string;
  policy_arn: string;
}

export class aws_iam_group_policy_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group_policy_attachment");
  }
}
