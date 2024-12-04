import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamGroupPoliciesExclusiveArgs {
  group_name: string;
  policy_names: string[];
}

export class aws_iam_group_policies_exclusive extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupPoliciesExclusiveArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group_policies_exclusive");
  }
}
