import { TerraformConfig, TerraformResource } from "tfs";
export interface PublicKey {
  format: string;
  key?: string;
}
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
  is_ca?: boolean;
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
  public_key: PublicKey;
  subject_config: SubjectConfig;
  subject_key_id: SubjectKeyId;
  x509_config: X509Config;
}
export interface Timeouts {
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
  config: Config;
  timeouts: Timeouts;
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