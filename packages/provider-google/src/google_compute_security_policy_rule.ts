import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds {
  header_name?: string;
  header_value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsHeaderAction {
  request_headers_to_adds: GoogleComputeSecurityPolicyRuleArgsHeaderActionRequestHeadersToAdds;
}
export interface GoogleComputeSecurityPolicyRuleArgsMatchConfig {
  src_ip_ranges?: string[];
}
export interface GoogleComputeSecurityPolicyRuleArgsMatchExpr {
  expression: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsMatchExprOptionsRecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}
export interface GoogleComputeSecurityPolicyRuleArgsMatchExprOptions {
  recaptcha_options: GoogleComputeSecurityPolicyRuleArgsMatchExprOptionsRecaptchaOptions;
}
export interface GoogleComputeSecurityPolicyRuleArgsMatch {
  versioned_expr?: string;
  config: GoogleComputeSecurityPolicyRuleArgsMatchConfig;
  expr: GoogleComputeSecurityPolicyRuleArgsMatchExpr;
  expr_options: GoogleComputeSecurityPolicyRuleArgsMatchExprOptions;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestCookie {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestHeader {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestQueryParam {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestUri {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestCookie;
  request_header: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestHeader;
  request_query_param: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestQueryParam;
  request_uri: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusionRequestUri;
}
export interface GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig {
  exclusion: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfigExclusion;
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
export interface GoogleComputeSecurityPolicyRuleArgsTimeouts {
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
  match: GoogleComputeSecurityPolicyRuleArgsMatch;
  preconfigured_waf_config: GoogleComputeSecurityPolicyRuleArgsPreconfiguredWafConfig;
  rate_limit_options: GoogleComputeSecurityPolicyRuleArgsRateLimitOptions;
  redirect_options: GoogleComputeSecurityPolicyRuleArgsRedirectOptions;
  timeouts?: GoogleComputeSecurityPolicyRuleArgsTimeouts;
}
export class google_compute_security_policy_rule extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSecurityPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_security_policy_rule");
  }
}