import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamUserGroupMembershipArgs {
  groups: string[];
  user: string;
}
export class aws_iam_user_group_membership extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user_group_membership");
  }
}