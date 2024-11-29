import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyOrganizationAdminAccountArgs {
  admin_account_id: string;
}
export class aws_guardduty_organization_admin_account extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_organization_admin_account");
  }
}