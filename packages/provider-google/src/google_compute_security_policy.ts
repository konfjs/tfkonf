import { TerraformConfig, TerraformResource } from "tfs";
export interface Layer7DdosDefenseConfig {
  enable?: boolean;
}
export interface AdaptiveProtectionConfig {
  layer_7_ddos_defense_config: Layer7DdosDefenseConfig;
}
export interface JsonCustomConfig {
  content_types: string[];
}
export interface AdvancedOptionsConfig {
  user_ip_request_headers?: string[];
  json_custom_config: JsonCustomConfig;
}
export interface RecaptchaOptionsConfig {
  redirect_site_key: string;
}
export interface RequestHeadersToAdds {
  header_name: string;
  header_value?: string;
}
export interface HeaderAction {
  request_headers_to_adds: RequestHeadersToAdds;
}
export interface Config {
  src_ip_ranges: string[];
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
  count: number;
  interval_sec: number;
}
export interface ExceedRedirectOptions {
  target?: string;
  type: string;
}
export interface RateLimitThreshold {
  count: number;
  interval_sec: number;
}
export interface RateLimitOptions {
  ban_duration_sec?: number;
  conform_action: string;
  enforce_on_key?: string;
  enforce_on_key_name?: string;
  exceed_action: string;
  ban_threshold: BanThreshold;
  exceed_redirect_options: ExceedRedirectOptions;
  rate_limit_threshold: RateLimitThreshold;
}
export interface RedirectOptions {
  target?: string;
  type: string;
}
export interface Rule {
  action: string;
  description?: string;
  priority: number;
  header_action: HeaderAction;
  match: Match;
  preconfigured_waf_config: PreconfiguredWafConfig;
  rate_limit_options: RateLimitOptions;
  redirect_options: RedirectOptions;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeSecurityPolicyArgs {
  description?: string;
  name: string;
  adaptive_protection_config: AdaptiveProtectionConfig;
  advanced_options_config: AdvancedOptionsConfig;
  recaptcha_options_config: RecaptchaOptionsConfig;
  rule: Rule;
  timeouts: Timeouts;
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