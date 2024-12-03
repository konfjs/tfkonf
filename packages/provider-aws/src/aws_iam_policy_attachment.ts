import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamPolicyAttachmentArgs {
  groups?: string[];
  name: string;
  policy_arn: string;
  roles?: string[];
  users?: string[];
}
export class aws_iam_policy_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iam_policy_attachment");
  }
}