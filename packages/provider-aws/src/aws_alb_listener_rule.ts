import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAlbListenerRuleArgsactionAuthenticateCognito {
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
export interface AwsAlbListenerRuleArgsactionAuthenticateOidc {
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
export interface AwsAlbListenerRuleArgsactionFixedResponse {
  content_type: string;
  message_body?: string;
}
export interface AwsAlbListenerRuleArgsactionforwardstickiness {
  duration: number;
  enabled?: boolean;
}
export interface AwsAlbListenerRuleArgsactionforwardTargetGroup {
  arn: string;
  weight?: number;
}
export interface AwsAlbListenerRuleArgsactionforward {
  stickiness: AwsAlbListenerRuleArgsactionforwardstickiness;
  target_group: AwsAlbListenerRuleArgsactionforwardTargetGroup;
}
export interface AwsAlbListenerRuleArgsactionredirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}
export interface AwsAlbListenerRuleArgsaction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito: AwsAlbListenerRuleArgsactionAuthenticateCognito;
  authenticate_oidc: AwsAlbListenerRuleArgsactionAuthenticateOidc;
  fixed_response: AwsAlbListenerRuleArgsactionFixedResponse;
  forward: AwsAlbListenerRuleArgsactionforward;
  redirect: AwsAlbListenerRuleArgsactionredirect;
}
export interface AwsAlbListenerRuleArgsconditionHostHeader {
  values: string[];
}
export interface AwsAlbListenerRuleArgsconditionHttpHeader {
  http_header_name: string;
  values: string[];
}
export interface AwsAlbListenerRuleArgsconditionHttpRequestMethod {
  values: string[];
}
export interface AwsAlbListenerRuleArgsconditionPathPattern {
  values: string[];
}
export interface AwsAlbListenerRuleArgsconditionQueryString {
  key?: string;
  value: string;
}
export interface AwsAlbListenerRuleArgsconditionSourceIp {
  values: string[];
}
export interface AwsAlbListenerRuleArgscondition {
  host_header: AwsAlbListenerRuleArgsconditionHostHeader;
  http_header: AwsAlbListenerRuleArgsconditionHttpHeader;
  http_request_method: AwsAlbListenerRuleArgsconditionHttpRequestMethod;
  path_pattern: AwsAlbListenerRuleArgsconditionPathPattern;
  query_string: AwsAlbListenerRuleArgsconditionQueryString;
  source_ip: AwsAlbListenerRuleArgsconditionSourceIp;
}
export interface AwsAlbListenerRuleArgs {
  listener_arn: string;
  tags?: {
    [key: string]: string;
  };
  action: AwsAlbListenerRuleArgsaction;
  condition: AwsAlbListenerRuleArgscondition;
}
export class aws_alb_listener_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly priority?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAlbListenerRuleArgs) {
    super(config, "resource", args, resourceName, "aws_alb_listener_rule");
  }
}