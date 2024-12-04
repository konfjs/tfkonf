import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamUserPolicyAttachmentsExclusiveArgs {
  policy_arns: string[];
  user_name: string;
}

export class aws_iam_user_policy_attachments_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserPolicyAttachmentsExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_policy_attachments_exclusive");
  }
}
