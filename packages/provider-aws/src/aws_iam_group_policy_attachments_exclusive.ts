import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPolicyAttachmentsExclusiveArgs {
  group_name: string;
  policy_arns: string[];
}

export class aws_iam_group_policy_attachments_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupPolicyAttachmentsExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group_policy_attachments_exclusive");
  }
}
