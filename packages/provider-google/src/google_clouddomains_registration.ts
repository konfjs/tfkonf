import { TerraformConfig, TerraformResource } from "tfs";
export interface PostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface AdminContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: PostalAddress;
}
export interface PostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface RegistrantContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: PostalAddress;
}
export interface PostalAddress {
  address_lines?: string[];
  administrative_area?: string;
  locality?: string;
  organization?: string;
  postal_code?: string;
  recipients?: string[];
  region_code: string;
}
export interface TechnicalContact {
  email: string;
  fax_number?: string;
  phone_number: string;
  postal_address: PostalAddress;
}
export interface ContactSettings {
  privacy: string;
  admin_contact: AdminContact;
  registrant_contact: RegistrantContact;
  technical_contact: TechnicalContact;
}
export interface DsRecords {
  algorithm?: string;
  digest?: string;
  digest_type?: string;
  key_tag?: number;
}
export interface CustomDns {
  name_servers: string[];
  ds_records: DsRecords;
}
export interface GlueRecords {
  host_name: string;
  ipv4_addresses?: string[];
  ipv6_addresses?: string[];
}
export interface DnsSettings {
  custom_dns: CustomDns;
  glue_records: GlueRecords;
}
export interface ManagementSettings {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface YearlyPrice {
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
  contact_settings: ContactSettings;
  dns_settings: DnsSettings;
  management_settings: ManagementSettings;
  timeouts: Timeouts;
  yearly_price: YearlyPrice;
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