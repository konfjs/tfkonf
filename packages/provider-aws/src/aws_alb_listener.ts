import { TerraformConfig, TerraformResource } from "tfs";
export interface AuthenticateCognito {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
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
export interface DefaultAction {
  target_group_arn?: string;
  type: string;
  authenticate_cognito: AuthenticateCognito;
  authenticate_oidc: AuthenticateOidc;
  fixed_response: FixedResponse;
  forward: Forward;
  redirect: Redirect;
}
export interface MutualAuthentication {
  ignore_client_certificate_expiry?: boolean;
  mode: string;
  trust_store_arn?: string;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsAlbListenerArgs {
  alpn_policy?: string;
  certificate_arn?: string;
  load_balancer_arn: string;
  port?: number;
  tags?: {
    [key: string]: string;
  };
  default_action: DefaultAction;
  mutual_authentication: MutualAuthentication;
  timeouts: Timeouts;
}
export class aws_alb_listener extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly protocol?: string;
  readonly ssl_policy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tcp_idle_timeout_seconds?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAlbListenerArgs) {
    super(config, "resource", args, resourceName, "aws_alb_listener");
  }
}