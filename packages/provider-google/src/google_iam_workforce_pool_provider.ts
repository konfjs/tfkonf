import { TerraformConfig, TerraformResource } from "tfs";
export interface Value {
  plain_text: string;
}
export interface ClientSecret {
  value: Value;
}
export interface QueryParameters {
  filter?: string;
}
export interface ExtraAttributesOauth2Client {
  attributes_type: string;
  client_id: string;
  issuer_uri: string;
  client_secret: ClientSecret;
  query_parameters: QueryParameters;
}
export interface Value {
  plain_text: string;
}
export interface ClientSecret {
  value: Value;
}
export interface WebSsoConfig {
  additional_scopes?: string[];
  assertion_claims_behavior: string;
  response_type: string;
}
export interface Oidc {
  client_id: string;
  issuer_uri: string;
  jwks_json?: string;
  client_secret: ClientSecret;
  web_sso_config: WebSsoConfig;
}
export interface Saml {
  idp_metadata_xml: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamWorkforcePoolProviderArgs {
  attribute_condition?: string;
  attribute_mapping?: {
    [key: string]: string;
  };
  description?: string;
  disabled?: boolean;
  display_name?: string;
  location: string;
  provider_id: string;
  workforce_pool_id: string;
  extra_attributes_oauth2_client: ExtraAttributesOauth2Client;
  oidc: Oidc;
  saml: Saml;
  timeouts: Timeouts;
}
export class google_iam_workforce_pool_provider extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamWorkforcePoolProviderArgs) {
    super(config, "resource", args, resourceName, "google_iam_workforce_pool_provider");
  }
}