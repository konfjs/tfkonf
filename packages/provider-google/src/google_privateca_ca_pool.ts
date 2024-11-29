import { TerraformConfig, TerraformResource } from "tfs";
export interface AllowedIssuanceModes {
  allow_config_based_issuance: boolean;
  allow_csr_based_issuance: boolean;
}
export interface EllipticCurve {
  signature_algorithm: string;
}
export interface Rsa {
  max_modulus_size?: string;
  min_modulus_size?: string;
}
export interface AllowedKeyTypes {
  elliptic_curve: EllipticCurve;
  rsa: Rsa;
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
export interface BaselineValues {
  aia_ocsp_servers?: string[];
  additional_extensions: AdditionalExtensions;
  ca_options: CaOptions;
  key_usage: KeyUsage;
  name_constraints: NameConstraints;
  policy_ids: PolicyIds;
}
export interface CelExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface IdentityConstraints {
  allow_subject_alt_names_passthrough: boolean;
  allow_subject_passthrough: boolean;
  cel_expression: CelExpression;
}
export interface IssuancePolicy {
  maximum_lifetime?: string;
  allowed_issuance_modes: AllowedIssuanceModes;
  allowed_key_types: AllowedKeyTypes;
  baseline_values: BaselineValues;
  identity_constraints: IdentityConstraints;
}
export interface PublishingOptions {
  encoding_format?: string;
  publish_ca_cert: boolean;
  publish_crl: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivatecaCaPoolArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  tier: string;
  issuance_policy: IssuancePolicy;
  publishing_options: PublishingOptions;
  timeouts: Timeouts;
}
export class google_privateca_ca_pool extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCaPoolArgs) {
    super(config, "resource", args, resourceName, "google_privateca_ca_pool");
  }
}