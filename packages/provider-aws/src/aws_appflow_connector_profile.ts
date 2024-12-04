import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsAmplitude {
  api_key: string;
  secret_key: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
  api_key: string;
  api_secret_key?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
  password: string;
  username: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
  credentials_map?: { [key: string]: string };
  custom_authentication_type: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
  access_token?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
  authentication_type: string;
  api_key: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
  basic: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic;
  custom: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom;
  oauth2: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsDatadog {
  api_key: string;
  application_key: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsDynatrace {
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

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsHoneycode {
  access_token?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsInforNexus {
  access_key_id: string;
  datakey: string;
  secret_access_key: string;
  user_id: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsMarketo {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsRedshift {
  password: string;
  username: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSalesforce {
  access_token?: string;
  client_credentials_arn?: string;
  jwt_token?: string;
  oauth2_grant_type?: string;
  refresh_token?: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest;
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

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSingular {
  api_key: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSlack {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSnowflake {
  password: string;
  username: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
  api_secret_key: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsVeeva {
  password: string;
  username: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest {
  auth_code?: string;
  redirect_uri?: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsZendesk {
  access_token?: string;
  client_id: string;
  client_secret: string;
  oauth_request: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentials {
  amplitude: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsAmplitude;
  custom_connector: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsCustomConnector;
  datadog: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsDatadog;
  dynatrace: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsDynatrace;
  google_analytics: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
  honeycode: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsHoneycode;
  infor_nexus: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsInforNexus;
  marketo: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsMarketo;
  redshift: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsRedshift;
  salesforce: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSalesforce;
  sapo_data: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSapoData;
  service_now: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsServiceNow;
  singular: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSingular;
  slack: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSlack;
  snowflake: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsSnowflake;
  trendmicro: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
  veeva: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsVeeva;
  zendesk: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileCredentialsZendesk;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesAmplitude {
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
  oauth2_grant_type: string;
  token_url: string;
  token_url_custom_properties?: { [key: string]: string };
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
  profile_properties?: { [key: string]: string };
  oauth2_properties: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesDatadog {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesDynatrace {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics {
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesHoneycode {
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesInforNexus {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesMarketo {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesRedshift {
  bucket_name: string;
  bucket_prefix?: string;
  cluster_identifier?: string;
  data_api_role_arn?: string;
  database_name?: string;
  database_url?: string;
  role_arn: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSalesforce {
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

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSingular {
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSlack {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSnowflake {
  account_name?: string;
  bucket_name: string;
  bucket_prefix?: string;
  private_link_service_name?: string;
  region?: string;
  stage: string;
  warehouse: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesTrendmicro {
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesVeeva {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesZendesk {
  instance_url: string;
}

export interface AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfileProperties {
  amplitude: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesAmplitude;
  custom_connector: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesCustomConnector;
  datadog: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesDatadog;
  dynatrace: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesDynatrace;
  google_analytics: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics;
  honeycode: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesHoneycode;
  infor_nexus: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesInforNexus;
  marketo: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesMarketo;
  redshift: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesRedshift;
  salesforce: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSalesforce;
  sapo_data: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSapoData;
  service_now: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesServiceNow;
  singular: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSingular;
  slack: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSlack;
  snowflake: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesSnowflake;
  trendmicro: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesTrendmicro;
  veeva: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesVeeva;
  zendesk: AwsAppflowConnectorProfileArgsConnectorProfileConfigConnectorProfilePropertiesZendesk;
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
