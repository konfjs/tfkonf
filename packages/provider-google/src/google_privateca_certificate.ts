import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GooglePrivatecaCertificateArgsConfigPublicKey {
  format: string;
  key?: string;
}
export interface GooglePrivatecaCertificateArgsConfigSubjectConfigSubject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}
export interface GooglePrivatecaCertificateArgsConfigSubjectConfigSubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}
export interface GooglePrivatecaCertificateArgsConfigSubjectConfig {
  subject: GooglePrivatecaCertificateArgsConfigSubjectConfigSubject;
  subject_alt_name: GooglePrivatecaCertificateArgsConfigSubjectConfigSubjectAltName;
}
export interface GooglePrivatecaCertificateArgsConfigSubjectKeyId {
  key_id?: string;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensionsObjectId {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensionsObjectId;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageBaseKeyUsage {
  cert_sign?: boolean;
  content_commitment?: boolean;
  crl_sign?: boolean;
  data_encipherment?: boolean;
  decipher_only?: boolean;
  digital_signature?: boolean;
  encipher_only?: boolean;
  key_agreement?: boolean;
  key_encipherment?: boolean;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsage {
  base_key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages;
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigNameConstraints {
  critical: boolean;
  excluded_dns_names?: string[];
  excluded_email_addresses?: string[];
  excluded_ip_ranges?: string[];
  excluded_uris?: string[];
  permitted_dns_names?: string[];
  permitted_email_addresses?: string[];
  permitted_ip_ranges?: string[];
  permitted_uris?: string[];
}
export interface GooglePrivatecaCertificateArgsConfigX509ConfigPolicyIds {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsConfigX509Config {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCertificateArgsConfigX509ConfigAdditionalExtensions;
  ca_options: GooglePrivatecaCertificateArgsConfigX509ConfigCaOptions;
  key_usage: GooglePrivatecaCertificateArgsConfigX509ConfigKeyUsage;
  name_constraints: GooglePrivatecaCertificateArgsConfigX509ConfigNameConstraints;
  policy_ids: GooglePrivatecaCertificateArgsConfigX509ConfigPolicyIds;
}
export interface GooglePrivatecaCertificateArgsConfig {
  public_key: GooglePrivatecaCertificateArgsConfigPublicKey;
  subject_config: GooglePrivatecaCertificateArgsConfigSubjectConfig;
  subject_key_id: GooglePrivatecaCertificateArgsConfigSubjectKeyId;
  x509_config: GooglePrivatecaCertificateArgsConfigX509Config;
}
export interface GooglePrivatecaCertificateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivatecaCertificateArgs {
  certificate_authority?: string;
  certificate_template?: string;
  labels?: {
    [key: string]: string;
  };
  lifetime?: string;
  location: string;
  name: string;
  pem_csr?: string;
  pool: string;
  config: GooglePrivatecaCertificateArgsConfig;
  timeouts?: GooglePrivatecaCertificateArgsTimeouts;
}
export class google_privateca_certificate extends TerraformResource {
  readonly certificate_description!: any[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly issuer_certificate_authority!: string;
  readonly pem_certificate!: string;
  readonly pem_certificate_chain!: string[];
  readonly project?: string;
  readonly revocation_details!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate");
  }
}