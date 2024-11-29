import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventConnectionArgsAuthParametersApiKey {
  key: string;
  value: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersbasic {
  password: string;
  username: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersbody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersheader {
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
  body: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersbody;
  header: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersheader;
  query_string: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParametersQueryString;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauthClientParameters {
  client_id: string;
  client_secret: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersbody {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersheader {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersQueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParameters {
  body: AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersbody;
  header: AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersheader;
  query_string: AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParametersQueryString;
}
export interface AwsCloudwatchEventConnectionArgsAuthParametersoauth {
  authorization_endpoint: string;
  http_method: string;
  client_parameters: AwsCloudwatchEventConnectionArgsAuthParametersoauthClientParameters;
  oauth_http_parameters: AwsCloudwatchEventConnectionArgsAuthParametersoauthOauthHttpParameters;
}
export interface AwsCloudwatchEventConnectionArgsAuthParameters {
  api_key: AwsCloudwatchEventConnectionArgsAuthParametersApiKey;
  basic: AwsCloudwatchEventConnectionArgsAuthParametersbasic;
  invocation_http_parameters: AwsCloudwatchEventConnectionArgsAuthParametersInvocationHttpParameters;
  oauth: AwsCloudwatchEventConnectionArgsAuthParametersoauth;
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