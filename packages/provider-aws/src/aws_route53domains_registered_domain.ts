import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53domainsRegisteredDomainArgsAdminContact {}
export interface AwsRoute53domainsRegisteredDomainArgsBillingContact {}
export interface AwsRoute53domainsRegisteredDomainArgsNameServer {
  glue_ips?: string[];
  name: string;
}
export interface AwsRoute53domainsRegisteredDomainArgsRegistrantContact {}
export interface AwsRoute53domainsRegisteredDomainArgsTechContact {}
export interface AwsRoute53domainsRegisteredDomainArgsTimeouts {
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
  admin_contact: AwsRoute53domainsRegisteredDomainArgsAdminContact;
  billing_contact: AwsRoute53domainsRegisteredDomainArgsBillingContact;
  name_server: AwsRoute53domainsRegisteredDomainArgsNameServer;
  registrant_contact: AwsRoute53domainsRegisteredDomainArgsRegistrantContact;
  tech_contact: AwsRoute53domainsRegisteredDomainArgsTechContact;
  timeouts: AwsRoute53domainsRegisteredDomainArgsTimeouts;
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