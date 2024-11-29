import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeUrlMapArgsDefaultRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyAbort {
  http_status?: number;
  percentage?: number;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelay {
  percentage?: number;
  fixed_delay: GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicy {
  abort: GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelay;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionRequestMirrorPolicy {
  backend_service: string;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionRetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeUrlMapArgsDefaultRouteActionRetryPolicyPerTryTimeout;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionTimeout {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServices {
  backend_service?: string;
  weight?: number;
  header_action: GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderAction;
}
export interface GoogleComputeUrlMapArgsDefaultRouteAction {
  cors_policy: GoogleComputeUrlMapArgsDefaultRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeUrlMapArgsDefaultRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeUrlMapArgsDefaultRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeUrlMapArgsDefaultRouteActionRetryPolicy;
  timeout: GoogleComputeUrlMapArgsDefaultRouteActionTimeout;
  url_rewrite: GoogleComputeUrlMapArgsDefaultRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeUrlMapArgsDefaultRouteActionWeightedBackendServices;
}
export interface GoogleComputeUrlMapArgsDefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface GoogleComputeUrlMapArgsHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsHostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  http_status?: number;
  percentage?: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  percentage?: number;
  fixed_delay: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicy {
  abort: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRequestMirrorPolicy {
  backend_service: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionTimeout {
  nanos?: number;
  seconds?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServices {
  backend_service?: string;
  weight?: number;
  header_action: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultRouteAction {
  cors_policy: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionRetryPolicy;
  timeout: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionTimeout;
  url_rewrite: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeUrlMapArgsPathMatcherDefaultRouteActionWeightedBackendServices;
}
export interface GoogleComputeUrlMapArgsPathMatcherDefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsPathMatcherHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsPathMatcherHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  http_status: number;
  percentage: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  percentage: number;
  fixed_delay: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  abort: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  backend_service: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionTimeout {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleRouteAction {
  cors_policy: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicy;
  timeout: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionTimeout;
  url_rewrite: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServices;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRuleUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherPathRule {
  paths: string[];
  service?: string;
  route_action: GoogleComputeUrlMapArgsPathMatcherPathRuleRouteAction;
  url_redirect: GoogleComputeUrlMapArgsPathMatcherPathRuleUrlRedirect;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  range_end: number;
  range_start: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatches {
  exact_match?: string;
  header_name: string;
  invert_match?: boolean;
  prefix_match?: string;
  present_match?: boolean;
  regex_match?: string;
  suffix_match?: string;
  range_match: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  name: string;
  value: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFilters {
  filter_match_criteria: string;
  filter_labels: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  exact_match?: string;
  name: string;
  present_match?: boolean;
  regex_match?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRules {
  full_path_match?: string;
  ignore_case?: boolean;
  path_template_match?: string;
  prefix_match?: string;
  regex_match?: string;
  header_matches: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatches;
  metadata_filters: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFilters;
  query_parameter_matches: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRulesQueryParameterMatches;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  http_status?: number;
  percentage?: number;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  percentage?: number;
  fixed_delay: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  abort: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  backend_service: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicy {
  num_retries: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionTimeout {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteAction {
  cors_policy: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicy;
  timeout: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionTimeout;
  url_rewrite: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServices;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRulesUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query?: boolean;
}
export interface GoogleComputeUrlMapArgsPathMatcherRouteRules {
  priority: number;
  service?: string;
  header_action: GoogleComputeUrlMapArgsPathMatcherRouteRulesHeaderAction;
  match_rules: GoogleComputeUrlMapArgsPathMatcherRouteRulesMatchRules;
  route_action: GoogleComputeUrlMapArgsPathMatcherRouteRulesRouteAction;
  url_redirect: GoogleComputeUrlMapArgsPathMatcherRouteRulesUrlRedirect;
}
export interface GoogleComputeUrlMapArgsPathMatcher {
  default_service?: string;
  description?: string;
  name: string;
  default_route_action: GoogleComputeUrlMapArgsPathMatcherDefaultRouteAction;
  default_url_redirect: GoogleComputeUrlMapArgsPathMatcherDefaultUrlRedirect;
  header_action: GoogleComputeUrlMapArgsPathMatcherHeaderAction;
  path_rule: GoogleComputeUrlMapArgsPathMatcherPathRule;
  route_rules: GoogleComputeUrlMapArgsPathMatcherRouteRules;
}
export interface GoogleComputeUrlMapArgsTest {
  description?: string;
  host: string;
  path: string;
  service: string;
}
export interface GoogleComputeUrlMapArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeUrlMapArgs {
  default_service?: string;
  description?: string;
  name: string;
  default_route_action: GoogleComputeUrlMapArgsDefaultRouteAction;
  default_url_redirect: GoogleComputeUrlMapArgsDefaultUrlRedirect;
  header_action: GoogleComputeUrlMapArgsHeaderAction;
  host_rule: GoogleComputeUrlMapArgsHostRule;
  path_matcher: GoogleComputeUrlMapArgsPathMatcher;
  test: GoogleComputeUrlMapArgsTest;
  timeouts: GoogleComputeUrlMapArgsTimeouts;
}
export class google_compute_url_map extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly map_id!: number;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeUrlMapArgs) {
    super(config, "resource", args, resourceName, "google_compute_url_map");
  }
}