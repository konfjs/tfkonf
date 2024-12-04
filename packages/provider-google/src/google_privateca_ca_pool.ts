import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCaPoolArgsIssuancePolicyAllowedIssuanceModes {
  allow_config_based_issuance: boolean;
  allow_csr_based_issuance: boolean;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypesEllipticCurve {
  signature_algorithm: string;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypesRsa {
  max_modulus_size?: string;
  min_modulus_size?: string;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypes {
  elliptic_curve: GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypesEllipticCurve;
  rsa: GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypesRsa;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
  object_id_path: number[];
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesAdditionalExtensions {
  critical: boolean;
  value: string;
  object_id: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
  non_ca?: boolean;
  zero_max_issuer_path_length?: boolean;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
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

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsage {
  base_key_usage: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesNameConstraints {
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

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesPolicyIds {
  object_id_path: number[];
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValues {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesAdditionalExtensions;
  ca_options: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesCaOptions;
  key_usage: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesKeyUsage;
  name_constraints: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesNameConstraints;
  policy_ids: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValuesPolicyIds;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyIdentityConstraintsCelExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicyIdentityConstraints {
  allow_subject_alt_names_passthrough: boolean;
  allow_subject_passthrough: boolean;
  cel_expression: GooglePrivatecaCaPoolArgsIssuancePolicyIdentityConstraintsCelExpression;
}

export interface GooglePrivatecaCaPoolArgsIssuancePolicy {
  maximum_lifetime?: string;
  allowed_issuance_modes: GooglePrivatecaCaPoolArgsIssuancePolicyAllowedIssuanceModes;
  allowed_key_types: GooglePrivatecaCaPoolArgsIssuancePolicyAllowedKeyTypes;
  baseline_values: GooglePrivatecaCaPoolArgsIssuancePolicyBaselineValues;
  identity_constraints: GooglePrivatecaCaPoolArgsIssuancePolicyIdentityConstraints;
}

export interface GooglePrivatecaCaPoolArgsPublishingOptions {
  encoding_format?: string;
  publish_ca_cert: boolean;
  publish_crl: boolean;
}

export interface GooglePrivatecaCaPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePrivatecaCaPoolArgs {
  labels?: { [key: string]: string };
  location: string;
  name: string;
  tier: string;
  issuance_policy: GooglePrivatecaCaPoolArgsIssuancePolicy;
  publishing_options: GooglePrivatecaCaPoolArgsPublishingOptions;
  timeouts?: GooglePrivatecaCaPoolArgsTimeouts;
}

export class google_privateca_ca_pool extends TerraformResource {
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCaPoolArgs) {
    super(config, "resource", args, resourceName, "google_privateca_ca_pool");
  }
}
