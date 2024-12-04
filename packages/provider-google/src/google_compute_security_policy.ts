import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSecurityPolicyArgsAdaptiveProtectionConfigLayer7DdosDefenseConfig {
  enable?: boolean;
}

export interface GoogleComputeSecurityPolicyArgsAdaptiveProtectionConfig {
  layer_7_ddos_defense_config: GoogleComputeSecurityPolicyArgsAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}

export interface GoogleComputeSecurityPolicyArgsAdvancedOptionsConfigJsonCustomConfig {
  content_types: string[];
}

export interface GoogleComputeSecurityPolicyArgsAdvancedOptionsConfig {
  user_ip_request_headers?: string[];
  json_custom_config: GoogleComputeSecurityPolicyArgsAdvancedOptionsConfigJsonCustomConfig;
}

export interface GoogleComputeSecurityPolicyArgsRecaptchaOptionsConfig {
  redirect_site_key: string;
}

export interface GoogleComputeSecurityPolicyArgsRuleHeaderActionRequestHeadersToAdds {
  header_name: string;
  header_value?: string;
}

export interface GoogleComputeSecurityPolicyArgsRuleHeaderAction {
  request_headers_to_adds: GoogleComputeSecurityPolicyArgsRuleHeaderActionRequestHeadersToAdds;
}

export interface GoogleComputeSecurityPolicyArgsRuleMatchConfig {
  src_ip_ranges: string[];
}

export interface GoogleComputeSecurityPolicyArgsRuleMatchExpr {
  expression: string;
}

export interface GoogleComputeSecurityPolicyArgsRuleMatchExprOptionsRecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}

export interface GoogleComputeSecurityPolicyArgsRuleMatchExprOptions {
  recaptcha_options: GoogleComputeSecurityPolicyArgsRuleMatchExprOptionsRecaptchaOptions;
}

export interface GoogleComputeSecurityPolicyArgsRuleMatch {
  versioned_expr?: string;
  config: GoogleComputeSecurityPolicyArgsRuleMatchConfig;
  expr: GoogleComputeSecurityPolicyArgsRuleMatchExpr;
  expr_options: GoogleComputeSecurityPolicyArgsRuleMatchExprOptions;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestCookie {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestHeader {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestQueryParam {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestUri {
  operator: string;
  value?: string;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestCookie;
  request_header: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestHeader;
  request_query_param: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestQueryParam;
  request_uri: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusionRequestUri;
}

export interface GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfig {
  exclusion: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfigExclusion;
}

export interface GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsBanThreshold {
  count: number;
  interval_sec: number;
}

export interface GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsExceedRedirectOptions {
  target?: string;
  type: string;
}

export interface GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsRateLimitThreshold {
  count: number;
  interval_sec: number;
}

export interface GoogleComputeSecurityPolicyArgsRuleRateLimitOptions {
  ban_duration_sec?: number;
  conform_action: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action: string;
  ban_threshold: GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsBanThreshold;
  exceed_redirect_options: GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsExceedRedirectOptions;
  rate_limit_threshold: GoogleComputeSecurityPolicyArgsRuleRateLimitOptionsRateLimitThreshold;
}

export interface GoogleComputeSecurityPolicyArgsRuleRedirectOptions {
  target?: string;
  type: string;
}

export interface GoogleComputeSecurityPolicyArgsRule {
  action: string;
  description?: string;
  priority: number;
  header_action: GoogleComputeSecurityPolicyArgsRuleHeaderAction;
  match: GoogleComputeSecurityPolicyArgsRuleMatch;
  preconfigured_waf_config: GoogleComputeSecurityPolicyArgsRulePreconfiguredWafConfig;
  rate_limit_options: GoogleComputeSecurityPolicyArgsRuleRateLimitOptions;
  redirect_options: GoogleComputeSecurityPolicyArgsRuleRedirectOptions;
}

export interface GoogleComputeSecurityPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeSecurityPolicyArgs {
  description?: string;
  name: string;
  adaptive_protection_config: GoogleComputeSecurityPolicyArgsAdaptiveProtectionConfig;
  advanced_options_config: GoogleComputeSecurityPolicyArgsAdvancedOptionsConfig;
  recaptcha_options_config: GoogleComputeSecurityPolicyArgsRecaptchaOptionsConfig;
  rule: GoogleComputeSecurityPolicyArgsRule;
  timeouts?: GoogleComputeSecurityPolicyArgsTimeouts;
}

export class google_compute_security_policy extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly type?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSecurityPolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_security_policy");
  }
}
