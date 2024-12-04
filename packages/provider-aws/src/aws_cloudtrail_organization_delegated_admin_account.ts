import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudtrailOrganizationDelegatedAdminAccountArgs {
  account_id: string;
}

export class aws_cloudtrail_organization_delegated_admin_account extends TerraformResource {
  readonly arn!: string;
  readonly email!: string;
  readonly id!: string;
  readonly name!: string;
  readonly service_principal!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudtrailOrganizationDelegatedAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_cloudtrail_organization_delegated_admin_account");
  }
}
