import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableSecretValue {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableEncryptionKeyValue;
  secret_value: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariableSecretValue;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlowClientSecret {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlow {
  auth_uri?: string;
  client_id?: string;
  enable_pkce?: boolean;
  scopes?: string[];
  client_secret: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlowClientSecret;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentialsClientSecret {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentials {
  client_id: string;
  client_secret: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentialsClientSecret;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerClientKey {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerJwtClaims {
  audience?: string;
  issuer?: string;
  subject?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearer {
  client_key: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerClientKey;
  jwt_claims: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearerJwtClaims;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCert {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCertPass {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKey {
  cert_type?: string;
  username: string;
  ssh_client_cert: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCert;
  ssh_client_cert_pass: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKeySshClientCertPass;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPasswordpassword {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPassword {
  username: string;
  password: GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPasswordpassword;
}
export interface GoogleIntegrationConnectorsConnectionArgsAuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable: GoogleIntegrationConnectorsConnectionArgsAuthConfigAdditionalVariable;
  oauth2_auth_code_flow: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2AuthCodeFlow;
  oauth2_client_credentials: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2ClientCredentials;
  oauth2_jwt_bearer: GoogleIntegrationConnectorsConnectionArgsAuthConfigOauth2JwtBearer;
  ssh_public_key: GoogleIntegrationConnectorsConnectionArgsAuthConfigSshPublicKey;
  user_password: GoogleIntegrationConnectorsConnectionArgsAuthConfigUserPassword;
}
export interface GoogleIntegrationConnectorsConnectionArgsConfigVariableEncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsConfigVariableSecretValue {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsConfigVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: GoogleIntegrationConnectorsConnectionArgsConfigVariableEncryptionKeyValue;
  secret_value: GoogleIntegrationConnectorsConnectionArgsConfigVariableSecretValue;
}
export interface GoogleIntegrationConnectorsConnectionArgsDestinationConfigdestination {
  host?: string;
  port?: number;
  service_attachment?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsDestinationConfig {
  key: string;
  destination: GoogleIntegrationConnectorsConnectionArgsDestinationConfigdestination;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableSecretValue {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableEncryptionKeyValue;
  secret_value: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariableSecretValue;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableSecretValue {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;
  secret_value: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariableSecretValue;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPasswordpassword {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPassword {
  username?: string;
  password: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPasswordpassword;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigAdditionalVariable;
  user_password: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfigUserPassword;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfigdestination {
  host?: string;
  port?: number;
  service_attachment?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfig {
  key?: string;
  destination: GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfigdestination;
}
export interface GoogleIntegrationConnectorsConnectionArgsEventingConfig {
  enrichment_enabled?: boolean;
  additional_variable: GoogleIntegrationConnectorsConnectionArgsEventingConfigAdditionalVariable;
  auth_config: GoogleIntegrationConnectorsConnectionArgsEventingConfigAuthConfig;
  registration_destination_config: GoogleIntegrationConnectorsConnectionArgsEventingConfigRegistrationDestinationConfig;
}
export interface GoogleIntegrationConnectorsConnectionArgsLockConfig {
  locked: boolean;
  reason?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsLogConfig {
  enabled: boolean;
}
export interface GoogleIntegrationConnectorsConnectionArgsNodeConfig {}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableEncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableSecretValue {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableEncryptionKeyValue;
  secret_value: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariableSecretValue;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientCertificate {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKey {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKeyPass {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfigPrivateServerCertificate {
  secret_version: string;
}
export interface GoogleIntegrationConnectorsConnectionArgsSslConfig {
  client_cert_type?: string;
  server_cert_type?: string;
  trust_model?: string;
  type: string;
  use_ssl?: boolean;
  additional_variable: GoogleIntegrationConnectorsConnectionArgsSslConfigAdditionalVariable;
  client_certificate: GoogleIntegrationConnectorsConnectionArgsSslConfigClientCertificate;
  client_private_key: GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKey;
  client_private_key_pass: GoogleIntegrationConnectorsConnectionArgsSslConfigClientPrivateKeyPass;
  private_server_certificate: GoogleIntegrationConnectorsConnectionArgsSslConfigPrivateServerCertificate;
}
export interface GoogleIntegrationConnectorsConnectionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIntegrationConnectorsConnectionArgs {
  connector_version: string;
  description?: string;
  eventing_enablement_type?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  suspended?: boolean;
  auth_config: GoogleIntegrationConnectorsConnectionArgsAuthConfig;
  config_variable: GoogleIntegrationConnectorsConnectionArgsConfigVariable;
  destination_config: GoogleIntegrationConnectorsConnectionArgsDestinationConfig;
  eventing_config: GoogleIntegrationConnectorsConnectionArgsEventingConfig;
  lock_config: GoogleIntegrationConnectorsConnectionArgsLockConfig;
  log_config: GoogleIntegrationConnectorsConnectionArgsLogConfig;
  node_config: GoogleIntegrationConnectorsConnectionArgsNodeConfig;
  ssl_config: GoogleIntegrationConnectorsConnectionArgsSslConfig;
  timeouts: GoogleIntegrationConnectorsConnectionArgstimeouts;
}
export class google_integration_connectors_connection extends TerraformResource {
  readonly connection_revision!: string;
  readonly connector_version_infra_config!: any[];
  readonly connector_version_launch_stage!: string;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly eventing_runtime_data!: any[];
  readonly id?: string;
  readonly project?: string;
  readonly service_account?: string;
  readonly service_directory!: string;
  readonly status!: any[];
  readonly subscription_type!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIntegrationConnectorsConnectionArgs) {
    super(config, "resource", args, resourceName, "google_integration_connectors_connection");
  }
}