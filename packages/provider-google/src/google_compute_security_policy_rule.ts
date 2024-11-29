import { TerraformConfig, TerraformResource } from "tfs";
export interface RequestHeadersToAdds {
  header_name?: string;
  header_value?: string;
}
export interface HeaderAction {
  request_headers_to_adds: RequestHeadersToAdds;
}
export interface Config {
  src_ip_ranges?: string[];
}
export interface Expr {
  expression: string;
}
export interface RecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}
export interface ExprOptions {
  recaptcha_options: RecaptchaOptions;
}
export interface Match {
  versioned_expr?: string;
  config: Config;
  expr: Expr;
  expr_options: ExprOptions;
}
export interface RequestCookie {
  operator: string;
  value?: string;
}
export interface RequestHeader {
  operator: string;
  value?: string;
}
export interface RequestQueryParam {
  operator: string;
  value?: string;
}
export interface RequestUri {
  operator: string;
  value?: string;
}
export interface Exclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie: RequestCookie;
  request_header: RequestHeader;
  request_query_param: RequestQueryParam;
  request_uri: RequestUri;
}
export interface PreconfiguredWafConfig {
  exclusion: Exclusion;
}
export interface BanThreshold {
  count?: number;
  interval_sec?: number;
}
export interface EnforceOnKeyConfigs {
  enforce_on_key_name?: string;
  enforce_on_key_type?: string;
}
export interface ExceedRedirectOptions {
  target?: string;
  type?: string;
}
export interface RateLimitThreshold {
  count?: number;
  interval_sec?: number;
}
export interface RateLimitOptions {
  ban_duration_sec?: number;
  conform_action?: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action?: string;
  ban_threshold: BanThreshold;
  enforce_on_key_configs: EnforceOnKeyConfigs;
  exceed_redirect_options: ExceedRedirectOptions;
  rate_limit_threshold: RateLimitThreshold;
}
export interface RedirectOptions {
  target?: string;
  type?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgs {
  action: string;
  description?: string;
  preview?: boolean;
  priority: number;
  security_policy: string;
  header_action: HeaderAction;
  match: Match;
  preconfigured_waf_config: PreconfiguredWafConfig;
  rate_limit_options: RateLimitOptions;
  redirect_options: RedirectOptions;
  timeouts: Timeouts;
}
export class google_compute_security_policy_rule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSecurityPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_security_policy_rule");
  }
}