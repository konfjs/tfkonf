import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLbListenerRuleArgsactionAuthenticateCognito {
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
export interface AwsLbListenerRuleArgsactionAuthenticateOidc {
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
export interface AwsLbListenerRuleArgsactionFixedResponse {
  content_type: string;
  message_body?: string;
}
export interface AwsLbListenerRuleArgsactionforwardstickiness {
  duration: number;
  enabled?: boolean;
}
export interface AwsLbListenerRuleArgsactionforwardTargetGroup {
  arn: string;
  weight?: number;
}
export interface AwsLbListenerRuleArgsactionforward {
  stickiness: AwsLbListenerRuleArgsactionforwardstickiness;
  target_group: AwsLbListenerRuleArgsactionforwardTargetGroup;
}
export interface AwsLbListenerRuleArgsactionredirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}
export interface AwsLbListenerRuleArgsaction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito: AwsLbListenerRuleArgsactionAuthenticateCognito;
  authenticate_oidc: AwsLbListenerRuleArgsactionAuthenticateOidc;
  fixed_response: AwsLbListenerRuleArgsactionFixedResponse;
  forward: AwsLbListenerRuleArgsactionforward;
  redirect: AwsLbListenerRuleArgsactionredirect;
}
export interface AwsLbListenerRuleArgsconditionHostHeader {
  values: string[];
}
export interface AwsLbListenerRuleArgsconditionHttpHeader {
  http_header_name: string;
  values: string[];
}
export interface AwsLbListenerRuleArgsconditionHttpRequestMethod {
  values: string[];
}
export interface AwsLbListenerRuleArgsconditionPathPattern {
  values: string[];
}
export interface AwsLbListenerRuleArgsconditionQueryString {
  key?: string;
  value: string;
}
export interface AwsLbListenerRuleArgsconditionSourceIp {
  values: string[];
}
export interface AwsLbListenerRuleArgscondition {
  host_header: AwsLbListenerRuleArgsconditionHostHeader;
  http_header: AwsLbListenerRuleArgsconditionHttpHeader;
  http_request_method: AwsLbListenerRuleArgsconditionHttpRequestMethod;
  path_pattern: AwsLbListenerRuleArgsconditionPathPattern;
  query_string: AwsLbListenerRuleArgsconditionQueryString;
  source_ip: AwsLbListenerRuleArgsconditionSourceIp;
}
export interface AwsLbListenerRuleArgs {
  listener_arn: string;
  tags?: {
    [key: string]: string;
  };
  action: AwsLbListenerRuleArgsaction;
  condition: AwsLbListenerRuleArgscondition;
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