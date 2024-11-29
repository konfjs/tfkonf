import { TerraformConfig, TerraformResource } from "tfs";
export interface ApiKey {
  key: string;
  value: string;
}
export interface Basic {
  password: string;
  username: string;
}
export interface Body {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface Header {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface QueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface InvocationHttpParameters {
  body: Body;
  header: Header;
  query_string: QueryString;
}
export interface ClientParameters {
  client_id: string;
  client_secret: string;
}
export interface Body {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface Header {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface QueryString {
  is_value_secret?: boolean;
  key?: string;
  value?: string;
}
export interface OauthHttpParameters {
  body: Body;
  header: Header;
  query_string: QueryString;
}
export interface Oauth {
  authorization_endpoint: string;
  http_method: string;
  client_parameters: ClientParameters;
  oauth_http_parameters: OauthHttpParameters;
}
export interface AuthParameters {
  api_key: ApiKey;
  basic: Basic;
  invocation_http_parameters: InvocationHttpParameters;
  oauth: Oauth;
}
export interface AwsCloudwatchEventConnectionArgs {
  authorization_type: string;
  description?: string;
  name: string;
  auth_parameters: AuthParameters;
}
export class aws_cloudwatch_event_connection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly secret_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_connection");
  }
}