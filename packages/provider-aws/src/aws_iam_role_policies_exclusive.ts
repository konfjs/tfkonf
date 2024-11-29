import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamRolePoliciesExclusiveArgs {
  policy_names: string[];
  role_name: string;
}
export class aws_iam_role_policies_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamRolePoliciesExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_role_policies_exclusive");
  }
}