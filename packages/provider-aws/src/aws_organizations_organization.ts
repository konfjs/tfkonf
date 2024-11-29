import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOrganizationsOrganizationArgs {
  aws_service_access_principals?: string[];
  enabled_policy_types?: string[];
  feature_set?: string;
}
export class aws_organizations_organization extends TerraformResource {
  readonly accounts!: any[];
  readonly arn!: string;
  readonly id?: string;
  readonly master_account_arn!: string;
  readonly master_account_email!: string;
  readonly master_account_id!: string;
  readonly master_account_name!: string;
  readonly non_master_accounts!: any[];
  readonly roots!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsOrganizationsOrganizationArgs) {
    super(config, "resource", args, resourceName, "aws_organizations_organization");
  }
}