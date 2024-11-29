import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIdentitystoreGroupMembershipArgs {
  group_id: string;
  identity_store_id: string;
  member_id: string;
}
export class aws_identitystore_group_membership extends TerraformResource {
  readonly id?: string;
  readonly membership_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIdentitystoreGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_identitystore_group_membership");
  }
}