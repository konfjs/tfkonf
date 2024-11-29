import { TerraformConfig, TerraformResource } from "tfs";
export interface AdminContact {}
export interface BillingContact {}
export interface NameServer {
  glue_ips?: string[];
  name: string;
}
export interface RegistrantContact {}
export interface TechContact {}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsRoute53domainsRegisteredDomainArgs {
  admin_privacy?: boolean;
  auto_renew?: boolean;
  billing_privacy?: boolean;
  domain_name: string;
  registrant_privacy?: boolean;
  tags?: {
    [key: string]: string;
  };
  tech_privacy?: boolean;
  transfer_lock?: boolean;
  admin_contact: AdminContact;
  billing_contact: BillingContact;
  name_server: NameServer;
  registrant_contact: RegistrantContact;
  tech_contact: TechContact;
  timeouts: Timeouts;
}
export class aws_route53domains_registered_domain extends TerraformResource {
  readonly abuse_contact_email!: string;
  readonly abuse_contact_phone!: string;
  readonly creation_date!: string;
  readonly expiration_date!: string;
  readonly id?: string;
  readonly registrar_name!: string;
  readonly registrar_url!: string;
  readonly reseller!: string;
  readonly status_list!: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly updated_date!: string;
  readonly whois_server!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53domainsRegisteredDomainArgs) {
    super(config, "resource", args, resourceName, "aws_route53domains_registered_domain");
  }
}