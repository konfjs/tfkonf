import { TerraformConfig, TerraformResource } from "tfs";
export interface Subject {
  common_name: string;
  country_code?: string;
  locality?: string;
  organization: string;
  organizational_unit?: string;
  postal_code?: string;
  province?: string;
  street_address?: string;
}
export interface SubjectAltName {
  dns_names?: string[];
  email_addresses?: string[];
  ip_addresses?: string[];
  uris?: string[];
}
export interface SubjectConfig {
  subject: Subject;
  subject_alt_name: SubjectAltName;
}
export interface SubjectKeyId {
  key_id?: string;
}
export interface ObjectId {
  object_id_path: number[];
}
export interface AdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: ObjectId;
}
export interface CaOptions {
  is_ca: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}
export interface BaseKeyUsage {
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
export interface ExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface UnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface KeyUsage {
  base_key_usage: BaseKeyUsage;
  extended_key_usage: ExtendedKeyUsage;
  unknown_extended_key_usages: UnknownExtendedKeyUsages;
}
export interface NameConstraints {
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
export interface PolicyIds {
  object_id_path: number[];
}
export interface X509Config {
  aia_ocsp_servers?: string[];
  additional_extensions: AdditionalExtensions;
  ca_options: CaOptions;
  key_usage: KeyUsage;
  name_constraints: NameConstraints;
  policy_ids: PolicyIds;
}
export interface Config {
  subject_config: SubjectConfig;
  subject_key_id: SubjectKeyId;
  x509_config: X509Config;
}
export interface KeySpec {
  algorithm?: string;
  cloud_kms_key_version?: string;
}
export interface PemIssuerChain {
  pem_certificates?: string[];
}
export interface SubordinateConfig {
  certificate_authority?: string;
  pem_issuer_chain: PemIssuerChain;
}
export interface Timeouts {
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
  config: Config;
  key_spec: KeySpec;
  subordinate_config: SubordinateConfig;
  timeouts: Timeouts;
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