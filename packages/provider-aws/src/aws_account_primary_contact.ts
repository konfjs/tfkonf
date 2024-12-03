import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAccountPrimaryContactArgs {
  account_id?: string;
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  company_name?: string;
  country_code: string;
  district_or_county?: string;
  full_name: string;
  phone_number: string;
  postal_code: string;
  state_or_region?: string;
  website_url?: string;
}
export class aws_account_primary_contact extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccountPrimaryContactArgs) {
    super(config, "resource", args, resourceName, "aws_account_primary_contact");
  }
}