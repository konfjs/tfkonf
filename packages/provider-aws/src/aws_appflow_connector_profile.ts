import { TerraformConfig, TerraformResource } from "tfs";
export interface Amplitude {
  api_key: string;
  secret_key: string;
}
export interface ApiKey {
  api_key: string;
  api_secret_key?: string;
}
export interface Basic {
  password: string;
  username: string;
}
export interface Custom {
  credentials_map?: {
    [key: string]: string;
  };
  custom_authentication_type: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Oauth2 {
  access_token?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  oauth_request: OauthRequest;
}
export interface CustomConnector {
  authentication_type: string;
  api_key: ApiKey;
  basic: Basic;
  custom: Custom;
  oauth2: Oauth2;
}
export interface Datadog {
  api_key: string;
  application_key: string;
}
export interface Dynatrace {
  api_token: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface GoogleAnalytics {
  access_token?: string;
  client_id: string;
  client_secret: string;
  refresh_token?: string;
  oauth_request: OauthRequest;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Honeycode {
  access_token?: string;
  refresh_token?: string;
  oauth_request: OauthRequest;
}
export interface InforNexus {
  access_key_id: string;
  datakey: string;
  secret_access_key: string;
  user_id: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Marketo {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: OauthRequest;
}
export interface Redshift {
  password: string;
  username: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Salesforce {
  access_token?: string;
  client_credentials_arn?: string;
  jwt_token?: string;
  oauth2_grant_type?: string;
  refresh_token?: string;
  oauth_request: OauthRequest;
}
export interface BasicAuthCredentials {
  password: string;
  username: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface OauthCredentials {
  access_token?: string;
  client_id: string;
  client_secret: string;
  refresh_token?: string;
  oauth_request: OauthRequest;
}
export interface SapoData {
  basic_auth_credentials: BasicAuthCredentials;
  oauth_credentials: OauthCredentials;
}
export interface ServiceNow {
  password: string;
  username: string;
}
export interface Singular {
  api_key: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Slack {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: OauthRequest;
}
export interface Snowflake {
  password: string;
  username: string;
}
export interface Trendmicro {
  api_secret_key: string;
}
export interface Veeva {
  password: string;
  username: string;
}
export interface OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface Zendesk {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: OauthRequest;
}
export interface ConnectorProfileCredentials {
  amplitude: Amplitude;
  custom_connector: CustomConnector;
  datadog: Datadog;
  dynatrace: Dynatrace;
  google_analytics: GoogleAnalytics;
  honeycode: Honeycode;
  infor_nexus: InforNexus;
  marketo: Marketo;
  redshift: Redshift;
  salesforce: Salesforce;
  sapo_data: SapoData;
  service_now: ServiceNow;
  singular: Singular;
  slack: Slack;
  snowflake: Snowflake;
  trendmicro: Trendmicro;
  veeva: Veeva;
  zendesk: Zendesk;
}
export interface Amplitude {}
export interface Oauth2Properties {
  oauth2_grant_type: string;
  token_url: string;
  token_url_custom_properties?: {
    [key: string]: string;
  };
}
export interface CustomConnector {
  profile_properties?: {
    [key: string]: string;
  };
  oauth2_properties: Oauth2Properties;
}
export interface Datadog {
  instance_url: string;
}
export interface Dynatrace {
  instance_url: string;
}
export interface GoogleAnalytics {}
export interface Honeycode {}
export interface InforNexus {
  instance_url: string;
}
export interface Marketo {
  instance_url: string;
}
export interface Redshift {
  bucket_name: string;
  bucket_prefix?: string;
  cluster_identifier?: string;
  data_api_role_arn?: string;
  database_name?: string;
  database_url?: string;
  role_arn: string;
}
export interface Salesforce {
  instance_url?: string;
  is_sandbox_environment?: boolean;
}
export interface OauthProperties {
  auth_code_url: string;
  oauth_scopes: string[];
  token_url: string;
}
export interface SapoData {
  application_host_url: string;
  application_service_path: string;
  client_number: string;
  logon_language?: string;
  port_number: number;
  private_link_service_name?: string;
  oauth_properties: OauthProperties;
}
export interface ServiceNow {
  instance_url: string;
}
export interface Singular {}
export interface Slack {
  instance_url: string;
}
export interface Snowflake {
  account_name?: string;
  bucket_name: string;
  bucket_prefix?: string;
  private_link_service_name?: string;
  region?: string;
  stage: string;
  warehouse: string;
}
export interface Trendmicro {}
export interface Veeva {
  instance_url: string;
}
export interface Zendesk {
  instance_url: string;
}
export interface ConnectorProfileProperties {
  amplitude: Amplitude;
  custom_connector: CustomConnector;
  datadog: Datadog;
  dynatrace: Dynatrace;
  google_analytics: GoogleAnalytics;
  honeycode: Honeycode;
  infor_nexus: InforNexus;
  marketo: Marketo;
  redshift: Redshift;
  salesforce: Salesforce;
  sapo_data: SapoData;
  service_now: ServiceNow;
  singular: Singular;
  slack: Slack;
  snowflake: Snowflake;
  trendmicro: Trendmicro;
  veeva: Veeva;
  zendesk: Zendesk;
}
export interface ConnectorProfileConfig {
  connector_profile_credentials: ConnectorProfileCredentials;
  connector_profile_properties: ConnectorProfileProperties;
}
export interface AwsAppflowConnectorProfileArgs {
  connection_mode: string;
  connector_label?: string;
  connector_type: string;
  name: string;
  connector_profile_config: ConnectorProfileConfig;
}
export class aws_appflow_connector_profile extends TerraformResource {
  readonly arn!: string;
  readonly credentials_arn!: string;
  readonly id?: string;
  readonly kms_arn?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppflowConnectorProfileArgs) {
    super(config, "resource", args, resourceName, "aws_appflow_connector_profile");
  }
}