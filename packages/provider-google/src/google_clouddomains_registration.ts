import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddomainsRegistrationArgsContactSettingsAdminContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface GoogleClouddomainsRegistrationArgsContactSettingsAdminContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsAdminContactPostalAddress;
}
export interface GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContactPostalAddress;
}
export interface GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContactPostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContactPostalAddress;
}
export interface GoogleClouddomainsRegistrationArgsContactSettings {
  privacy: string;
  admin_contact: GoogleClouddomainsRegistrationArgsContactSettingsAdminContact;
  registrant_contact: GoogleClouddomainsRegistrationArgsContactSettingsRegistrantContact;
  technical_contact: GoogleClouddomainsRegistrationArgsContactSettingsTechnicalContact;
}
export interface GoogleClouddomainsRegistrationArgsDnsSettingsCustomDnsDsRecords {
  algorithm?: string;
  digest?: string;
  digest_type?: string;
  key_tag?: number;
}
export interface GoogleClouddomainsRegistrationArgsDnsSettingsCustomDns {
  name_servers: string[];
  ds_records: GoogleClouddomainsRegistrationArgsDnsSettingsCustomDnsDsRecords;
}
export interface GoogleClouddomainsRegistrationArgsDnsSettingsGlueRecords {
  host_name: string;
  ipv4_addresses?: string[];
  ipv6_addresses?: string[];
}
export interface GoogleClouddomainsRegistrationArgsDnsSettings {
  custom_dns: GoogleClouddomainsRegistrationArgsDnsSettingsCustomDns;
  glue_records: GoogleClouddomainsRegistrationArgsDnsSettingsGlueRecords;
}
export interface GoogleClouddomainsRegistrationArgsManagementSettings {}
export interface GoogleClouddomainsRegistrationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleClouddomainsRegistrationArgsYearlyPrice {
  currency_code?: string;
  units?: string;
}
export interface GoogleClouddomainsRegistrationArgs {
  contact_notices?: string[];
  domain_name: string;
  domain_notices?: string[];
  labels?: {
    [key: string]: string;
  };
  location: string;
  contact_settings: GoogleClouddomainsRegistrationArgsContactSettings;
  dns_settings: GoogleClouddomainsRegistrationArgsDnsSettings;
  management_settings: GoogleClouddomainsRegistrationArgsManagementSettings;
  timeouts: GoogleClouddomainsRegistrationArgstimeouts;
  yearly_price: GoogleClouddomainsRegistrationArgsYearlyPrice;
}
export class google_clouddomains_registration extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly expire_time!: string;
  readonly id?: string;
  readonly issues!: string[];
  readonly name!: string;
  readonly project?: string;
  readonly register_failure_reason!: string;
  readonly state!: string;
  readonly supported_privacy!: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddomainsRegistrationArgs) {
    super(config, "resource", args, resourceName, "google_clouddomains_registration");
  }
}