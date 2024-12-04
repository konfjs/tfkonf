import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDetectiveOrganizationAdminAccountArgs {
  account_id: string;
}

export class aws_detective_organization_admin_account extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDetectiveOrganizationAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_detective_organization_admin_account");
  }
}
