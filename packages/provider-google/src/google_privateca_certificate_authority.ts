import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfigSubject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfigSubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfig {
  subject: GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfigSubject;
  subject_alt_name: GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfigSubjectAltName;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigSubjectKeyId {
  key_id?: string;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigAdditionalExtensionsObjectId {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigAdditionalExtensionsObjectId;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigCaOptions {
  is_ca: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageBaseKeyUsage {
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
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsage {
  base_key_usage: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsageUnknownExtendedKeyUsages;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigNameConstraints {
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
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigPolicyIds {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateAuthorityArgsConfigX509Config {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigAdditionalExtensions;
  ca_options: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigCaOptions;
  key_usage: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigKeyUsage;
  name_constraints: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigNameConstraints;
  policy_ids: GooglePrivatecaCertificateAuthorityArgsConfigX509ConfigPolicyIds;
}
export interface GooglePrivatecaCertificateAuthorityArgsConfig {
  subject_config: GooglePrivatecaCertificateAuthorityArgsConfigSubjectConfig;
  subject_key_id: GooglePrivatecaCertificateAuthorityArgsConfigSubjectKeyId;
  x509_config: GooglePrivatecaCertificateAuthorityArgsConfigX509Config;
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
export interface GooglePrivatecaCertificateAuthorityArgsTimeouts {
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
  config: GooglePrivatecaCertificateAuthorityArgsConfig;
  key_spec: GooglePrivatecaCertificateAuthorityArgsKeySpec;
  subordinate_config: GooglePrivatecaCertificateAuthorityArgsSubordinateConfig;
  timeouts?: GooglePrivatecaCertificateAuthorityArgsTimeouts;
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