import { TerraformConfig, TerraformResource } from "tfs";
export interface AuthenticateCognito {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: number;
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
}
export interface AuthenticateOidc {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: number;
  token_endpoint: string;
  user_info_endpoint: string;
}
export interface FixedResponse {
  content_type: string;
  message_body?: string;
}
export interface Stickiness {
  duration: number;
  enabled?: boolean;
}
export interface TargetGroup {
  arn: string;
  weight?: number;
}
export interface Forward {
  stickiness: Stickiness;
  target_group: TargetGroup;
}
export interface Redirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}
export interface Action {
  target_group_arn?: string;
  type: string;
  authenticate_cognito: AuthenticateCognito;
  authenticate_oidc: AuthenticateOidc;
  fixed_response: FixedResponse;
  forward: Forward;
  redirect: Redirect;
}
export interface HostHeader {
  values: string[];
}
export interface HttpHeader {
  http_header_name: string;
  values: string[];
}
export interface HttpRequestMethod {
  values: string[];
}
export interface PathPattern {
  values: string[];
}
export interface QueryString {
  key?: string;
  value: string;
}
export interface SourceIp {
  values: string[];
}
export interface Condition {
  host_header: HostHeader;
  http_header: HttpHeader;
  http_request_method: HttpRequestMethod;
  path_pattern: PathPattern;
  query_string: QueryString;
  source_ip: SourceIp;
}
export interface AwsLbListenerRuleArgs {
  listener_arn: string;
  tags?: {
    [key: string]: string;
  };
  action: Action;
  condition: Condition;
}
export class aws_lb_listener_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly priority?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbListenerRuleArgs) {
    super(config, "resource", args, resourceName, "aws_lb_listener_rule");
  }
}