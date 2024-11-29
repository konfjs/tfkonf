import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePrivatecaCertificateArgsconfigPublicKey {
  format: string;
  key?: string;
}
export interface GooglePrivatecaCertificateArgsconfigSubjectConfigsubject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}
export interface GooglePrivatecaCertificateArgsconfigSubjectConfigSubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}
export interface GooglePrivatecaCertificateArgsconfigSubjectConfig {
  subject: GooglePrivatecaCertificateArgsconfigSubjectConfigsubject;
  subject_alt_name: GooglePrivatecaCertificateArgsconfigSubjectConfigSubjectAltName;
}
export interface GooglePrivatecaCertificateArgsconfigSubjectKeyId {
  key_id?: string;
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigAdditionalExtensionsObjectId {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateArgsconfigX509ConfigAdditionalExtensionsObjectId;
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageBaseKeyUsage {
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
export interface GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsage {
  base_key_usage: GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsageUnknownExtendedKeyUsages;
}
export interface GooglePrivatecaCertificateArgsconfigX509ConfigNameConstraints {
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
export interface GooglePrivatecaCertificateArgsconfigX509ConfigPolicyIds {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateArgsconfigX509Config {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCertificateArgsconfigX509ConfigAdditionalExtensions;
  ca_options: GooglePrivatecaCertificateArgsconfigX509ConfigCaOptions;
  key_usage: GooglePrivatecaCertificateArgsconfigX509ConfigKeyUsage;
  name_constraints: GooglePrivatecaCertificateArgsconfigX509ConfigNameConstraints;
  policy_ids: GooglePrivatecaCertificateArgsconfigX509ConfigPolicyIds;
}
export interface GooglePrivatecaCertificateArgsconfig {
  public_key: GooglePrivatecaCertificateArgsconfigPublicKey;
  subject_config: GooglePrivatecaCertificateArgsconfigSubjectConfig;
  subject_key_id: GooglePrivatecaCertificateArgsconfigSubjectKeyId;
  x509_config: GooglePrivatecaCertificateArgsconfigX509Config;
}
export interface GooglePrivatecaCertificateArgstimeouts {
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
  config: GooglePrivatecaCertificateArgsconfig;
  timeouts: GooglePrivatecaCertificateArgstimeouts;
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