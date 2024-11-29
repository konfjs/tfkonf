import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamUserPoliciesExclusiveArgs {
  policy_names: string[];
  user_name: string;
}
export class aws_iam_user_policies_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserPoliciesExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_policies_exclusive");
  }
}