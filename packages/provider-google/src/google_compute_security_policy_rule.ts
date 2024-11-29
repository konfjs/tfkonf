import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds {
  header_name?: string;
  header_value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsHeaderAction {
  request_headers_to_adds: GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds;
}
export interface GoogleComputeSecurityPolicyRuleArgsmatchconfig {
  src_ip_ranges?: string[];
}
export interface GoogleComputeSecurityPolicyRuleArgsmatchexpr {
  expression: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsmatchExprOptionsRecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}
export interface GoogleComputeSecurityPolicyRuleArgsmatchExprOptions {
  recaptcha_options: GoogleComputeSecurityPolicyRuleArgsmatchExprOptionsRecaptchaOptions;
}
export interface GoogleComputeSecurityPolicyRuleArgsmatch {
  versioned_expr?: string;
  config: GoogleComputeSecurityPolicyRuleArgsmatchconfig;
  expr: GoogleComputeSecurityPolicyRuleArgsmatchexpr;
  expr_options: GoogleComputeSecurityPolicyRuleArgsmatchExprOptions;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestCookie {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestHeader {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestQueryParam {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestUri {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestCookie;
  request_header: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestHeader;
  request_query_param: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestQueryParam;
  request_uri: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusionRequestUri;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig {
  exclusion: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigexclusion;
}
export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsBanThreshold {
  count?: number;
  interval_sec?: number;
}
export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsEnforceOnKeyConfigs {
  enforce_on_key_name?: string;
  enforce_on_key_type?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsExceedRedirectOptions {
  target?: string;
  type?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsRateLimitThreshold {
  count?: number;
  interval_sec?: number;
}
export interface GoogleComputeSecurityPolicyRuleArgsRateLimitOptions {
  ban_duration_sec?: number;
  conform_action?: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action?: string;
  ban_threshold: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsBanThreshold;
  enforce_on_key_configs: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsEnforceOnKeyConfigs;
  exceed_redirect_options: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsExceedRedirectOptions;
  rate_limit_threshold: GoogleComputeSecurityPolicyRuleArgsRateLimitOptionsRateLimitThreshold;
}
export interface GoogleComputeSecurityPolicyRuleArgsRedirectOptions {
  target?: string;
  type?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgstimeouts {
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
  header_action: GoogleComputeSecurityPolicyRuleArgsHeaderAction;
  match: GoogleComputeSecurityPolicyRuleArgsmatch;
  preconfigured_waf_config: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig;
  rate_limit_options: GoogleComputeSecurityPolicyRuleArgsRateLimitOptions;
  redirect_options: GoogleComputeSecurityPolicyRuleArgsRedirectOptions;
  timeouts: GoogleComputeSecurityPolicyRuleArgstimeouts;
}
export class google_compute_security_policy_rule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSecurityPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_security_policy_rule");
  }
}