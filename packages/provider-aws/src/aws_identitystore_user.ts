import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIdentitystoreUserArgsAddresses {
  country?: string;
  formatted?: string;
  locality?: string;
  postal_code?: string;
  primary?: boolean;
  region?: string;
  street_address?: string;
  type?: string;
}
export interface AwsIdentitystoreUserArgsEmails {
  primary?: boolean;
  type?: string;
  value?: string;
}
export interface AwsIdentitystoreUserArgsName {
  family_name: string;
  formatted?: string;
  given_name: string;
  honorific_prefix?: string;
  honorific_suffix?: string;
  middle_name?: string;
}
export interface AwsIdentitystoreUserArgsPhoneNumbers {
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
  addresses: AwsIdentitystoreUserArgsAddresses;
  emails: AwsIdentitystoreUserArgsEmails;
  name: AwsIdentitystoreUserArgsName;
  phone_numbers: AwsIdentitystoreUserArgsPhoneNumbers;
}
export class aws_identitystore_user extends TerraformResource {
  readonly external_ids!: any[];
  readonly id?: string;
  readonly user_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIdentitystoreUserArgs) {
    super(config, "resource", args, resourceName, "aws_identitystore_user");
  }
}