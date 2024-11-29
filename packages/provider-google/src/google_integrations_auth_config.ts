import { TerraformConfig, TerraformResource } from "tfs";
export interface ClientCertificate {
  encrypted_private_key: string;
  passphrase?: string;
  ssl_certificate: string;
}
export interface AuthToken {
  token?: string;
  type?: string;
}
export interface Jwt {
  jwt_header?: string;
  jwt_payload?: string;
  secret?: string;
}
export interface Oauth2AuthorizationCode {
  auth_endpoint?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
  token_endpoint?: string;
}
export interface LiteralValue {
  string_value?: string;
}
export interface Key {
  literal_value: LiteralValue;
}
export interface LiteralValue {
  string_value?: string;
}
export interface Value {
  literal_value: LiteralValue;
}
export interface Entries {
  key: Key;
  value: Value;
}
export interface TokenParams {
  entries: Entries;
}
export interface Oauth2ClientCredentials {
  client_id?: string;
  client_secret?: string;
  request_type?: string;
  scope?: string;
  token_endpoint?: string;
  token_params: TokenParams;
}
export interface OidcToken {
  audience?: string;
  service_account_email?: string;
}
export interface ServiceAccountCredentials {
  scope?: string;
  service_account?: string;
}
export interface UsernameAndPassword {
  password?: string;
  username?: string;
}
export interface DecryptedCredential {
  credential_type: string;
  auth_token: AuthToken;
  jwt: Jwt;
  oauth2_authorization_code: Oauth2AuthorizationCode;
  oauth2_client_credentials: Oauth2ClientCredentials;
  oidc_token: OidcToken;
  service_account_credentials: ServiceAccountCredentials;
  username_and_password: UsernameAndPassword;
}
export interface Timeouts {
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
  client_certificate: ClientCertificate;
  decrypted_credential: DecryptedCredential;
  timeouts: Timeouts;
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