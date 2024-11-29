import { TerraformConfig, TerraformResource } from "tfs";
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
export interface GoogleComputeSecurityPolicyArgsruleHeaderActionRequestHeadersToAdds {
  header_name: string;
  header_value?: string;
}
export interface GoogleComputeSecurityPolicyArgsruleHeaderAction {
  request_headers_to_adds: GoogleComputeSecurityPolicyArgsruleHeaderActionRequestHeadersToAdds;
}
export interface GoogleComputeSecurityPolicyArgsrulematchconfig {
  src_ip_ranges: string[];
}
export interface GoogleComputeSecurityPolicyArgsrulematchexpr {
  expression: string;
}
export interface GoogleComputeSecurityPolicyArgsrulematchExprOptionsRecaptchaOptions {
  action_token_site_keys?: string[];
  session_token_site_keys?: string[];
}
export interface GoogleComputeSecurityPolicyArgsrulematchExprOptions {
  recaptcha_options: GoogleComputeSecurityPolicyArgsrulematchExprOptionsRecaptchaOptions;
}
export interface GoogleComputeSecurityPolicyArgsrulematch {
  versioned_expr?: string;
  config: GoogleComputeSecurityPolicyArgsrulematchconfig;
  expr: GoogleComputeSecurityPolicyArgsrulematchexpr;
  expr_options: GoogleComputeSecurityPolicyArgsrulematchExprOptions;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestCookie {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestHeader {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestQueryParam {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestUri {
  operator: string;
  value?: string;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusion {
  target_rule_ids?: string[];
  target_rule_set: string;
  request_cookie: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestCookie;
  request_header: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestHeader;
  request_query_param: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestQueryParam;
  request_uri: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusionRequestUri;
}
export interface GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfig {
  exclusion: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfigexclusion;
}
export interface GoogleComputeSecurityPolicyArgsruleRateLimitOptionsBanThreshold {
  count: number;
  interval_sec: number;
}
export interface GoogleComputeSecurityPolicyArgsruleRateLimitOptionsExceedRedirectOptions {
  target?: string;
  type: string;
}
export interface GoogleComputeSecurityPolicyArgsruleRateLimitOptionsRateLimitThreshold {
  count: number;
  interval_sec: number;
}
export interface GoogleComputeSecurityPolicyArgsruleRateLimitOptions {
  ban_duration_sec?: number;
  conform_action: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action: string;
  ban_threshold: GoogleComputeSecurityPolicyArgsruleRateLimitOptionsBanThreshold;
  exceed_redirect_options: GoogleComputeSecurityPolicyArgsruleRateLimitOptionsExceedRedirectOptions;
  rate_limit_threshold: GoogleComputeSecurityPolicyArgsruleRateLimitOptionsRateLimitThreshold;
}
export interface GoogleComputeSecurityPolicyArgsruleRedirectOptions {
  target?: string;
  type: string;
}
export interface GoogleComputeSecurityPolicyArgsrule {
  action: string;
  description?: string;
  priority: number;
  header_action: GoogleComputeSecurityPolicyArgsruleHeaderAction;
  match: GoogleComputeSecurityPolicyArgsrulematch;
  preconfigured_waf_config: GoogleComputeSecurityPolicyArgsrulePreconfiguredWafConfig;
  rate_limit_options: GoogleComputeSecurityPolicyArgsruleRateLimitOptions;
  redirect_options: GoogleComputeSecurityPolicyArgsruleRedirectOptions;
}
export interface GoogleComputeSecurityPolicyArgstimeouts {
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
  rule: GoogleComputeSecurityPolicyArgsrule;
  timeouts: GoogleComputeSecurityPolicyArgstimeouts;
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