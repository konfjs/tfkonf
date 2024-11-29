import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamRolePolicyAttachmentsExclusiveArgs {
  policy_arns: string[];
  role_name: string;
}
export class aws_iam_role_policy_attachments_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamRolePolicyAttachmentsExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_role_policy_attachments_exclusive");
  }
}