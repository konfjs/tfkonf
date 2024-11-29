import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsamplitude {
  api_key: string;
  secret_key: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
  api_key: string;
  api_secret_key?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorbasic {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorcustom {
  credentials_map?: {
    [key: string]: string;
  };
  custom_authentication_type: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectoroauth2OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectoroauth2 {
  access_token?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectoroauth2OauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
  authentication_type: string;
  api_key: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
  basic: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorbasic;
  custom: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorcustom;
  oauth2: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectoroauth2;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsdatadog {
  api_key: string;
  application_key: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsdynatrace {
  api_token: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
  access_token?: string;
  client_id: string;
  client_secret: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialshoneycodeOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialshoneycode {
  access_token?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialshoneycodeOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsInforNexus {
  access_key_id: string;
  datakey: string;
  secret_access_key: string;
  user_id: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsmarketoOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsmarketo {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsmarketoOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsredshift {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssalesforceOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssalesforce {
  access_token?: string;
  client_credentials_arn?: string;
  jwt_token?: string;
  oauth2_grant_type?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssalesforceOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials {
  access_token?: string;
  client_id: string;
  client_secret: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoData {
  basic_auth_credentials: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials;
  oauth_credentials: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsServiceNow {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssingular {
  api_key: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsslackOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsslack {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsslackOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssnowflake {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialstrendmicro {
  api_secret_key: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsveeva {
  password: string;
  username: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialszendeskOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialszendesk {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialszendeskOauthRequest;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentials {
  amplitude: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsamplitude;
  custom_connector: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnector;
  datadog: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsdatadog;
  dynatrace: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsdynatrace;
  google_analytics: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
  honeycode: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialshoneycode;
  infor_nexus: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsInforNexus;
  marketo: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsmarketo;
  redshift: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsredshift;
  salesforce: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssalesforce;
  sapo_data: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoData;
  service_now: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsServiceNow;
  singular: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssingular;
  slack: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsslack;
  snowflake: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialssnowflake;
  trendmicro: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialstrendmicro;
  veeva: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsveeva;
  zendesk: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialszendesk;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesamplitude {}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
  oauth2_grant_type: string;
  token_url: string;
  token_url_custom_properties?: {
    [key: string]: string;
  };
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
  profile_properties?: {
    [key: string]: string;
  };
  oauth2_properties: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesdatadog {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesdynatrace {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics {}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertieshoneycode {}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesInforNexus {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesmarketo {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesredshift {
  bucket_name: string;
  bucket_prefix?: string;
  cluster_identifier?: string;
  data_api_role_arn?: string;
  database_name?: string;
  database_url?: string;
  role_arn: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessalesforce {
  instance_url?: string;
  is_sandbox_environment?: boolean;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties {
  auth_code_url: string;
  oauth_scopes: string[];
  token_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSapoData {
  application_host_url: string;
  application_service_path: string;
  client_number: string;
  logon_language?: string;
  port_number: number;
  private_link_service_name?: string;
  oauth_properties: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesServiceNow {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessingular {}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesslack {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessnowflake {
  account_name?: string;
  bucket_name: string;
  bucket_prefix?: string;
  private_link_service_name?: string;
  region?: string;
  stage: string;
  warehouse: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiestrendmicro {}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesveeva {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertieszendesk {
  instance_url: string;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileProperties {
  amplitude: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesamplitude;
  custom_connector: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnector;
  datadog: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesdatadog;
  dynatrace: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesdynatrace;
  google_analytics: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics;
  honeycode: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertieshoneycode;
  infor_nexus: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesInforNexus;
  marketo: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesmarketo;
  redshift: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesredshift;
  salesforce: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessalesforce;
  sapo_data: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSapoData;
  service_now: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesServiceNow;
  singular: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessingular;
  slack: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesslack;
  snowflake: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiessnowflake;
  trendmicro: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiestrendmicro;
  veeva: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesveeva;
  zendesk: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertieszendesk;
}
export interface AwsAppflowConnectorProfileArgsConnectorProfileConfig {
  connector_profile_credentials: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentials;
  connector_profile_properties: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileProperties;
}
export interface AwsAppflowConnectorProfileArgs {
  connection_mode: string;
  connector_label?: string;
  connector_type: string;
  name: string;
  connector_profile_config: AwsAppflowConnectorProfileArgsConnectorProfileConfig;
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