import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecretvalue {
  plain_text: string;
}
export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecret {
  value: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecretvalue;
}
export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientQueryParameters {
  filter?: string;
}
export interface GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2Client {
  attributes_type: string;
  client_id: string;
  issuer_uri: string;
  client_secret: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientClientSecret;
  query_parameters: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2ClientQueryParameters;
}
export interface GoogleIamWorkforcePoolProviderArgsoidcClientSecretvalue {
  plain_text: string;
}
export interface GoogleIamWorkforcePoolProviderArgsoidcClientSecret {
  value: GoogleIamWorkforcePoolProviderArgsoidcClientSecretvalue;
}
export interface GoogleIamWorkforcePoolProviderArgsoidcWebSsoConfig {
  additional_scopes?: string[];
  assertion_claims_behavior: string;
  response_type: string;
}
export interface GoogleIamWorkforcePoolProviderArgsoidc {
  client_id: string;
  issuer_uri: string;
  jwks_json?: string;
  client_secret: GoogleIamWorkforcePoolProviderArgsoidcClientSecret;
  web_sso_config: GoogleIamWorkforcePoolProviderArgsoidcWebSsoConfig;
}
export interface GoogleIamWorkforcePoolProviderArgssaml {
  idp_metadata_xml: string;
}
export interface GoogleIamWorkforcePoolProviderArgstimeouts {
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
  extra_attributes_oauth2_client: GoogleIamWorkforcePoolProviderArgsExtraAttributesOauth2Client;
  oidc: GoogleIamWorkforcePoolProviderArgsoidc;
  saml: GoogleIamWorkforcePoolProviderArgssaml;
  timeouts: GoogleIamWorkforcePoolProviderArgstimeouts;
}
export class google_iam_workforce_pool_provider extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamWorkforcePoolProviderArgs) {
    super(config, "resource", args, resourceName, "google_iam_workforce_pool_provider");
  }
}