import { TerraformConfig, TerraformResource } from "tfs";
export interface CelExpression {
  description?: string;
  expression?: string;
  location?: string;
  title?: string;
}
export interface IdentityConstraints {
  allow_subject_alt_names_passthrough: boolean;
  allow_subject_passthrough: boolean;
  cel_expression: CelExpression;
}
export interface AdditionalExtensions {
  object_id_path: number[];
}
export interface PassthroughExtensions {
  known_extensions?: string[];
  additional_extensions: AdditionalExtensions;
}
export interface ObjectId {
  object_id_path: number[];
}
export interface AdditionalExtensions {
  critical?: boolean;
  value: string;
  object_id: ObjectId;
}
export interface CaOptions {
  is_ca?: boolean;
  max_issuer_path_length?: number;
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
export interface PolicyIds {
  object_id_path: number[];
}
export interface PredefinedValues {
  aia_ocsp_servers?: string[];
  additional_extensions: AdditionalExtensions;
  ca_options: CaOptions;
  key_usage: KeyUsage;
  policy_ids: PolicyIds;
}
export interface Timeouts {
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
  identity_constraints: IdentityConstraints;
  passthrough_extensions: PassthroughExtensions;
  predefined_values: PredefinedValues;
  timeouts: Timeouts;
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