import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudwatchEventConnectionArgsAuthParametersApiKey {
  key: string;
  value: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersBasic {
  password: string;
  username: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersBody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersHeader {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersQueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParameters {
  body: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersBody;
  header: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersHeader;
  query_string: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersQueryString;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthClientParameters {
  client_id: string;
  client_secret: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersBody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersHeader {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersQueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParameters {
  body: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersBody;
  header: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersHeader;
  query_string: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParametersQueryString;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersOauth {
  authorization_endpoint: string;
  http_method: string;
  client_parameters: AwsCloudwatchEventConnectionArgsAuthParametersOauthClientParameters;
  oauth_http_parameters: AwsCloudwatchEventConnectionArgsAuthParametersOauthOauthHttpParameters;
}
export interface AwsCloudwatchEventConnectionArgsAuthParameters {
  api_key: AwsCloudwatchEventConnectionArgsAuthParametersApiKey;
  basic: AwsCloudwatchEventConnectionArgsAuthParametersBasic;
  invocation_http_parameters: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParameters;
  oauth: AwsCloudwatchEventConnectionArgsAuthParametersOauth;
}
export interface AwsCloudwatchEventConnectionArgs {
  authorization_type: string;
  description?: string;
  name: string;
  auth_parameters: AwsCloudwatchEventConnectionArgsAuthParameters;
}
export class aws_cloudwatch_event_connection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly secret_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_connection");
  }
}