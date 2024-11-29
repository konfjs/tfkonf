import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMacie2OrganizationAdminAccountArgs {
  admin_account_id: string;
}
export class aws_macie2_organization_admin_account extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2OrganizationAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_organization_admin_account");
  }
}