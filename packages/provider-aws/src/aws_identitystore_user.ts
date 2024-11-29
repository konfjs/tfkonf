import { TerraformConfig, TerraformResource } from "tfs";
export interface Addresses {
  country?: string;
  formatted?: string;
  locality?: string;
  postal_code?: string;
  primary?: boolean;
  region?: string;
  street_address?: string;
  type?: string;
}
export interface Emails {
  primary?: boolean;
  type?: string;
  value?: string;
}
export interface Name {
  family_name: string;
  formatted?: string;
  given_name: string;
  honorific_prefix?: string;
  honorific_suffix?: string;
  middle_name?: string;
}
export interface PhoneNumbers {
  primary?: boolean;
  type?: string;
  value?: string;
}
export interface AwsIdentitystoreUserArgs {
  display_name: string;
  identity_store_id: string;
  locale?: string;
  nickname?: string;
  preferred_language?: string;
  profile_url?: string;
  timezone?: string;
  title?: string;
  user_name: string;
  user_type?: string;
  addresses: Addresses;
  emails: Emails;
  name: Name;
  phone_numbers: PhoneNumbers;
}
export class aws_identitystore_user extends TerraformResource {
  readonly external_ids!: any[];
  readonly id?: string;
  readonly user_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIdentitystoreUserArgs) {
    super(config, "resource", args, resourceName, "aws_identitystore_user");
  }
}