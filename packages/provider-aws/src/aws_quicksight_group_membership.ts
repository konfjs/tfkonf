import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightGroupMembershipArgs {
  group_name: string;
  member_name: string;
  namespace?: string;
}
export class aws_quicksight_group_membership extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_group_membership");
  }
}