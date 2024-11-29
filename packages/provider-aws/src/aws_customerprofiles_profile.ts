import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCustomerprofilesProfileArgsAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}
export interface AwsCustomerprofilesProfileArgsBillingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}
export interface AwsCustomerprofilesProfileArgsMailingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}
export interface AwsCustomerprofilesProfileArgsShippingAddress {
  address_1?: string;
  address_2?: string;
  address_3?: string;
  address_4?: string;
  city?: string;
  country?: string;
  county?: string;
  postal_code?: string;
  province?: string;
  state?: string;
}
export interface AwsCustomerprofilesProfileArgs {
  account_number?: string;
  additional_information?: string;
  attributes?: {
    [key: string]: string;
  };
  birth_date?: string;
  business_email_address?: string;
  business_name?: string;
  business_phone_number?: string;
  domain_name: string;
  email_address?: string;
  first_name?: string;
  gender_string?: string;
  home_phone_number?: string;
  last_name?: string;
  middle_name?: string;
  mobile_phone_number?: string;
  party_type_string?: string;
  personal_email_address?: string;
  phone_number?: string;
  address: AwsCustomerprofilesProfileArgsAddress;
  billing_address: AwsCustomerprofilesProfileArgsBillingAddress;
  mailing_address: AwsCustomerprofilesProfileArgsMailingAddress;
  shipping_address: AwsCustomerprofilesProfileArgsShippingAddress;
}
export class aws_customerprofiles_profile extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCustomerprofilesProfileArgs) {
    super(config, "resource", args, resourceName, "aws_customerprofiles_profile");
  }
}