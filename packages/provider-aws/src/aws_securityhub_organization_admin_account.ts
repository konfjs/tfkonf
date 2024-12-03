import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSecurityhubOrganizationAdminAccountArgs {
  admin_account_id: string;
}
export class aws_securityhub_organization_admin_account extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubOrganizationAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_organization_admin_account");
  }
}