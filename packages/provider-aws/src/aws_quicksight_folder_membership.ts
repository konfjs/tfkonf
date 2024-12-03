import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsQuicksightFolderMembershipArgs {
  folder_id: string;
  member_id: string;
  member_type: string;
}
export class aws_quicksight_folder_membership extends TerraformResource {
  readonly aws_account_id?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightFolderMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_folder_membership");
  }
}