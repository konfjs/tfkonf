import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcIpamOrganizationAdminAccountArgs {
  delegated_admin_account_id: string;
}
export class aws_vpc_ipam_organization_admin_account extends TerraformResource {
  readonly arn!: string;
  readonly email!: string;
  readonly id?: string;
  readonly name!: string;
  readonly service_principal!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamOrganizationAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_organization_admin_account");
  }
}