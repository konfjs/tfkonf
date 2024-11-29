import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePrivatecaCertificateTemplateArgsIdentityConstraintsCelExpression {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface GooglePrivatecaCertificateTemplateArgsIdentityConstraints {
  allow_subject_alt_names_passthrough: boolean;
  allow_subject_passthrough: boolean;
  cel_expression: GooglePrivatecaCertificateTemplateArgsIdentityConstraintsCelExpression;
}
export interface GooglePrivatecaCertificateTemplateArgsPassthroughExtensionsAdditionalExtensions {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateTemplateArgsPassthroughExtensions {
  known_extensions?: string[];
  additional_extensions: GooglePrivatecaCertificateTemplateArgsPassthroughExtensionsAdditionalExtensions;
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensionsObjectId {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensions {
  critical?: boolean;
  value: string;
  object_id: GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensionsObjectId;
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesCaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageBaseKeyUsage {
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
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageExtendedKeyUsage {
  client_auth?: boolean;
  code_signing?: boolean;
  email_protection?: boolean;
  ocsp_signing?: boolean;
  server_auth?: boolean;
  time_stamping?: boolean;
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageUnknownExtendedKeyUsages {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsage {
  base_key_usage: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageBaseKeyUsage;
  extended_key_usage: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageExtendedKeyUsage;
  unknown_extended_key_usages: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsageUnknownExtendedKeyUsages;
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValuesPolicyIds {
  object_id_path: number[];
}
export interface GooglePrivatecaCertificateTemplateArgsPredefinedValues {
  aia_ocsp_servers?: string[];
  additional_extensions: GooglePrivatecaCertificateTemplateArgsPredefinedValuesAdditionalExtensions;
  ca_options: GooglePrivatecaCertificateTemplateArgsPredefinedValuesCaOptions;
  key_usage: GooglePrivatecaCertificateTemplateArgsPredefinedValuesKeyUsage;
  policy_ids: GooglePrivatecaCertificateTemplateArgsPredefinedValuesPolicyIds;
}
export interface GooglePrivatecaCertificateTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivatecaCertificateTemplateArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  maximum_lifetime?: string;
  name: string;
  identity_constraints: GooglePrivatecaCertificateTemplateArgsIdentityConstraints;
  passthrough_extensions: GooglePrivatecaCertificateTemplateArgsPassthroughExtensions;
  predefined_values: GooglePrivatecaCertificateTemplateArgsPredefinedValues;
  timeouts: GooglePrivatecaCertificateTemplateArgsTimeouts;
}
export class google_privateca_certificate_template extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate_template");
  }
}