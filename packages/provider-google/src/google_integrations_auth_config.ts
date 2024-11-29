import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIntegrationsAuthConfigArgsClientCertificate {
  encrypted_private_key: string;
  passphrase?: string;
  ssl_certificate: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialAuthToken {
  token?: string;
  type?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialJwt {
  jwt_header?: string;
  jwt_payload?: string;
  secret?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2AuthorizationCode {
  auth_endpoint?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
  token_endpoint?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue {
  string_value?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey {
  literal_value: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue {
  string_value?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue {
  literal_value: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries {
  key: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;
  value: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParams {
  entries: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentials {
  client_id?: string;
  client_secret?: string;
  request_type?: string;
  scope?: string;
  token_endpoint?: string;
  token_params: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentialsTokenParams;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialOidcToken {
  audience?: string;
  service_account_email?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialServiceAccountCredentials {
  scope?: string;
  service_account?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredentialUsernameAndPassword {
  password?: string;
  username?: string;
}
export interface GoogleIntegrationsAuthConfigArgsDecryptedCredential {
  credential_type: string;
  auth_token: GoogleIntegrationsAuthConfigArgsDecryptedCredentialAuthToken;
  jwt: GoogleIntegrationsAuthConfigArgsDecryptedCredentialJwt;
  oauth2_authorization_code: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2AuthorizationCode;
  oauth2_client_credentials: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOauth2ClientCredentials;
  oidc_token: GoogleIntegrationsAuthConfigArgsDecryptedCredentialOidcToken;
  service_account_credentials: GoogleIntegrationsAuthConfigArgsDecryptedCredentialServiceAccountCredentials;
  username_and_password: GoogleIntegrationsAuthConfigArgsDecryptedCredentialUsernameAndPassword;
}
export interface GoogleIntegrationsAuthConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIntegrationsAuthConfigArgs {
  description?: string;
  display_name: string;
  expiry_notification_duration?: string[];
  location: string;
  override_valid_time?: string;
  visibility?: string;
  client_certificate: GoogleIntegrationsAuthConfigArgsClientCertificate;
  decrypted_credential: GoogleIntegrationsAuthConfigArgsDecryptedCredential;
  timeouts: GoogleIntegrationsAuthConfigArgsTimeouts;
}
export class google_integrations_auth_config extends TerraformResource {
  readonly certificate_id!: string;
  readonly create_time!: string;
  readonly creator_email!: string;
  readonly credential_type!: string;
  readonly encrypted_credential!: string;
  readonly id?: string;
  readonly last_modifier_email!: string;
  readonly name!: string;
  readonly project?: string;
  readonly reason!: string;
  readonly state!: string;
  readonly update_time!: string;
  readonly valid_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIntegrationsAuthConfigArgs) {
    super(config, "resource", args, resourceName, "google_integrations_auth_config");
  }
}