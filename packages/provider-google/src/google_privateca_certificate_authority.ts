import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfigsubject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfigSubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfig {
  subject: GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfigsubject;
  subject_alt_name: GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfigSubjectAltName;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigSubjectKeyId {
  key_id?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigAdditionalExtensionsObjectId {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigAdditionalExtensionsObjectId;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigCaOptions {
  is_ca: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageBaseKeyUsage {
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
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsage {
  base_key_usage: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsageUnknownExtendedKeyUsages;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigNameConstraints {
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
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigPolicyIds {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsconfigX509Config {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigAdditionalExtensions;
  ca_options: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigCaOptions;
  key_usage: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigKeyUsage;
  name_constraints: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigNameConstraints;
  policy_ids: GooglePrivatecaCertificateAuthorityArgsconfigX509ConfigPolicyIds;
}
export interface GooglePrivatecaCertificateAuthorityArgsconfig {
  subject_config: GooglePrivatecaCertificateAuthorityArgsconfigSubjectConfig;
  subject_key_id: GooglePrivatecaCertificateAuthorityArgsconfigSubjectKeyId;
  x509_config: GooglePrivatecaCertificateAuthorityArgsconfigX509Config;
}
export interface GooglePrivatecaCertificateAuthorityArgsKeySpec {
  algorithm?: string;
  cloud_kms_key_version?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgsSubordinateConfigPemIssuerChain {
  pem_certificates?: string[];
}
export interface GooglePrivatecaCertificateAuthorityArgsSubordinateConfig {
  certificate_authority?: string;
  pem_issuer_chain: GooglePrivatecaCertificateAuthorityArgsSubordinateConfigPemIssuerChain;
}
export interface GooglePrivatecaCertificateAuthorityArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgs {
  certificate_authority_id: string;
  deletion_protection?: boolean;
  desired_state?: string;
  gcs_bucket?: string;
  ignore_active_certificates_on_deletion?: boolean;
  labels?: {
    [key: string]: string;
  };
  lifetime?: string;
  location: string;
  pem_ca_certificate?: string;
  pool: string;
  skip_grace_period?: boolean;
  type?: string;
  config: GooglePrivatecaCertificateAuthorityArgsconfig;
  key_spec: GooglePrivatecaCertificateAuthorityArgsKeySpec;
  subordinate_config: GooglePrivatecaCertificateAuthorityArgsSubordinateConfig;
  timeouts: GooglePrivatecaCertificateAuthorityArgstimeouts;
}
export class google_privateca_certificate_authority extends TerraformResource {
  readonly access_urls!: any[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly pem_ca_certificates!: string[];
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateAuthorityArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate_authority");
  }
}