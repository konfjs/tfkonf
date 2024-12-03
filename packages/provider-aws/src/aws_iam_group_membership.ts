import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsIamGroupMembershipArgs {
  group: string;
  name: string;
  users: string[];
}
export class aws_iam_group_membership extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group_membership");
  }
}