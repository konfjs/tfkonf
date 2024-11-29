import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLbListenerArgsDefaultActionAuthenticateCognito {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
}
export interface AwsLbListenerArgsDefaultActionAuthenticateOidc {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  token_endpoint: string;
  user_info_endpoint: string;
}
export interface AwsLbListenerArgsDefaultActionFixedResponse {
  content_type: string;
  message_body?: string;
}
export interface AwsLbListenerArgsDefaultActionForwardStickiness {
  duration: number;
  enabled?: boolean;
}
export interface AwsLbListenerArgsDefaultActionForwardTargetGroup {
  arn: string;
  weight?: number;
}
export interface AwsLbListenerArgsDefaultActionForward {
  stickiness: AwsLbListenerArgsDefaultActionForwardStickiness;
  target_group: AwsLbListenerArgsDefaultActionForwardTargetGroup;
}
export interface AwsLbListenerArgsDefaultActionRedirect {
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
}
export interface AwsLbListenerArgsDefaultAction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito: AwsLbListenerArgsDefaultActionAuthenticateCognito;
  authenticate_oidc: AwsLbListenerArgsDefaultActionAuthenticateOidc;
  fixed_response: AwsLbListenerArgsDefaultActionFixedResponse;
  forward: AwsLbListenerArgsDefaultActionForward;
  redirect: AwsLbListenerArgsDefaultActionRedirect;
}
export interface AwsLbListenerArgsMutualAuthentication {
  ignore_client_certificate_expiry?: boolean;
  mode: string;
  trust_store_arn?: string;
}
export interface AwsLbListenerArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsLbListenerArgs {
  alpn_policy?: string;
  certificate_arn?: string;
  load_balancer_arn: string;
  port?: number;
  tags?: {
    [key: string]: string;
  };
  default_action: AwsLbListenerArgsDefaultAction;
  mutual_authentication: AwsLbListenerArgsMutualAuthentication;
  timeouts?: AwsLbListenerArgsTimeouts;
}
export class aws_lb_listener extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly protocol?: string;
  readonly ssl_policy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tcp_idle_timeout_seconds?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbListenerArgs) {
    super(config, "resource", args, resourceName, "aws_lb_listener");
  }
}