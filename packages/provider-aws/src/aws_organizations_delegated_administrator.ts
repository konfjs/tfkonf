import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOrganizationsDelegatedAdministratorArgs {
  account_id: string;
  service_principal: string;
}
export class aws_organizations_delegated_administrator extends TerraformResource {
  readonly arn!: string;
  readonly delegation_enabled_date!: string;
  readonly email!: string;
  readonly id?: string;
  readonly joined_method!: string;
  readonly joined_timestamp!: string;
  readonly name!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsDelegatedAdministratorArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_delegated_administrator");
  }
}