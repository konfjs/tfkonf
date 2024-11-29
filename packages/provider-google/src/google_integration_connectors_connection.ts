import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}
export interface SecretValue {
  secret_version: string;
}
export interface AdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: EncryptionKeyValue;
  secret_value: SecretValue;
}
export interface ClientSecret {
  secret_version: string;
}
export interface Oauth2AuthCodeFlow {
  auth_uri?: string;
  client_id?: string;
  enable_pkce?: boolean;
  scopes?: string[];
  client_secret: ClientSecret;
}
export interface ClientSecret {
  secret_version: string;
}
export interface Oauth2ClientCredentials {
  client_id: string;
  client_secret: ClientSecret;
}
export interface ClientKey {
  secret_version: string;
}
export interface JwtClaims {
  audience?: string;
  issuer?: string;
  subject?: string;
}
export interface Oauth2JwtBearer {
  client_key: ClientKey;
  jwt_claims: JwtClaims;
}
export interface SshClientCert {
  secret_version: string;
}
export interface SshClientCertPass {
  secret_version: string;
}
export interface SshPublicKey {
  cert_type?: string;
  username: string;
  ssh_client_cert: SshClientCert;
  ssh_client_cert_pass: SshClientCertPass;
}
export interface Password {
  secret_version: string;
}
export interface UserPassword {
  username: string;
  password: Password;
}
export interface AuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable: AdditionalVariable;
  oauth2_auth_code_flow: Oauth2AuthCodeFlow;
  oauth2_client_credentials: Oauth2ClientCredentials;
  oauth2_jwt_bearer: Oauth2JwtBearer;
  ssh_public_key: SshPublicKey;
  user_password: UserPassword;
}
export interface EncryptionKeyValue {
  kms_key_name?: string;
  type: string;
}
export interface SecretValue {
  secret_version: string;
}
export interface ConfigVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: EncryptionKeyValue;
  secret_value: SecretValue;
}
export interface Destination {
  host?: string;
  port?: number;
  service_attachment?: string;
}
export interface DestinationConfig {
  key: string;
  destination: Destination;
}
export interface EncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface SecretValue {
  secret_version: string;
}
export interface AdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: EncryptionKeyValue;
  secret_value: SecretValue;
}
export interface EncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface SecretValue {
  secret_version: string;
}
export interface AdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: EncryptionKeyValue;
  secret_value: SecretValue;
}
export interface Password {
  secret_version: string;
}
export interface UserPassword {
  username?: string;
  password: Password;
}
export interface AuthConfig {
  auth_key?: string;
  auth_type: string;
  additional_variable: AdditionalVariable;
  user_password: UserPassword;
}
export interface Destination {
  host?: string;
  port?: number;
  service_attachment?: string;
}
export interface RegistrationDestinationConfig {
  key?: string;
  destination: Destination;
}
export interface EventingConfig {
  enrichment_enabled?: boolean;
  additional_variable: AdditionalVariable;
  auth_config: AuthConfig;
  registration_destination_config: RegistrationDestinationConfig;
}
export interface LockConfig {
  locked: boolean;
  reason?: string;
}
export interface LogConfig {
  enabled: boolean;
}
export interface NodeConfig {}
export interface EncryptionKeyValue {
  kms_key_name?: string;
  type?: string;
}
export interface SecretValue {
  secret_version: string;
}
export interface AdditionalVariable {
  boolean_value?: boolean;
  integer_value?: number;
  key: string;
  string_value?: string;
  encryption_key_value: EncryptionKeyValue;
  secret_value: SecretValue;
}
export interface ClientCertificate {
  secret_version: string;
}
export interface ClientPrivateKey {
  secret_version: string;
}
export interface ClientPrivateKeyPass {
  secret_version: string;
}
export interface PrivateServerCertificate {
  secret_version: string;
}
export interface SslConfig {
  client_cert_type?: string;
  server_cert_type?: string;
  trust_model?: string;
  type: string;
  use_ssl?: boolean;
  additional_variable: AdditionalVariable;
  client_certificate: ClientCertificate;
  client_private_key: ClientPrivateKey;
  client_private_key_pass: ClientPrivateKeyPass;
  private_server_certificate: PrivateServerCertificate;
}
export interface Timeouts {
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
  auth_config: AuthConfig;
  config_variable: ConfigVariable;
  destination_config: DestinationConfig;
  eventing_config: EventingConfig;
  lock_config: LockConfig;
  log_config: LogConfig;
  node_config: NodeConfig;
  ssl_config: SslConfig;
  timeouts: Timeouts;
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