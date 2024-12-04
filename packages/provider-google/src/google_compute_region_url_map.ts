import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyAbort {
  http_status?: number;
  percentage?: number;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds?: string;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelay {
  percentage?: number;
  fixed_delay: GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicy {
  abort: GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicyDelay;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionRequestMirrorPolicy {
  backend_service?: string;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds?: string;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionRetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeRegionUrlMapArgsDefaultRouteActionRetryPolicyPerTryTimeout;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionTimeout {
  nanos?: number;
  seconds?: string;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServices {
  backend_service?: string;
  weight?: number;
  header_action: GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServicesHeaderAction;
}

export interface GoogleComputeRegionUrlMapArgsDefaultRouteAction {
  cors_policy: GoogleComputeRegionUrlMapArgsDefaultRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeRegionUrlMapArgsDefaultRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeRegionUrlMapArgsDefaultRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeRegionUrlMapArgsDefaultRouteActionRetryPolicy;
  timeout: GoogleComputeRegionUrlMapArgsDefaultRouteActionTimeout;
  url_rewrite: GoogleComputeRegionUrlMapArgsDefaultRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeRegionUrlMapArgsDefaultRouteActionWeightedBackendServices;
}

export interface GoogleComputeRegionUrlMapArgsDefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}

export interface GoogleComputeRegionUrlMapArgsHostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherDefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled: boolean;
  expose_headers?: string[];
  max_age?: number;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  http_status: number;
  percentage: number;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  percentage: number;
  fixed_delay: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  abort: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  backend_service: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionTimeout {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteAction {
  cors_policy: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionRetryPolicy;
  timeout: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionTimeout;
  url_rewrite: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteActionWeightedBackendServices;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRuleUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherPathRule {
  paths: string[];
  service?: string;
  route_action: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleRouteAction;
  url_redirect: GoogleComputeRegionUrlMapArgsPathMatcherPathRuleUrlRedirect;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderActionResponseHeadersToAdd;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  range_end: number;
  range_start: number;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatches {
  exact_match?: string;
  header_name: string;
  invert_match?: boolean;
  prefix_match?: string;
  present_match?: boolean;
  regex_match?: string;
  suffix_match?: string;
  range_match: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  name: string;
  value: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFilters {
  filter_match_criteria: string;
  filter_labels: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  exact_match?: string;
  name: string;
  present_match?: boolean;
  regex_match?: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRules {
  full_path_match?: string;
  ignore_case?: boolean;
  path_template_match?: string;
  prefix_match?: string;
  regex_match?: string;
  header_matches: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesHeaderMatches;
  metadata_filters: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesMetadataFilters;
  query_parameter_matches: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRulesQueryParameterMatches;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  http_status?: number;
  percentage?: number;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  percentage?: number;
  fixed_delay: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  abort: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  delay: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  backend_service: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicy {
  num_retries: number;
  retry_conditions?: string[];
  per_try_timeout: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionTimeout {
  nanos?: number;
  seconds: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd;
  response_headers_to_add: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteAction {
  cors_policy: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionCorsPolicy;
  fault_injection_policy: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  request_mirror_policy: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  retry_policy: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionRetryPolicy;
  timeout: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionTimeout;
  url_rewrite: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionUrlRewrite;
  weighted_backend_services: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteActionWeightedBackendServices;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query?: boolean;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcherRouteRules {
  priority: number;
  service?: string;
  header_action: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesHeaderAction;
  match_rules: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesMatchRules;
  route_action: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesRouteAction;
  url_redirect: GoogleComputeRegionUrlMapArgsPathMatcherRouteRulesUrlRedirect;
}

export interface GoogleComputeRegionUrlMapArgsPathMatcher {
  default_service?: string;
  description?: string;
  name: string;
  default_url_redirect: GoogleComputeRegionUrlMapArgsPathMatcherDefaultUrlRedirect;
  path_rule: GoogleComputeRegionUrlMapArgsPathMatcherPathRule;
  route_rules: GoogleComputeRegionUrlMapArgsPathMatcherRouteRules;
}

export interface GoogleComputeRegionUrlMapArgsTest {
  description?: string;
  host: string;
  path: string;
  service: string;
}

export interface GoogleComputeRegionUrlMapArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeRegionUrlMapArgs {
  default_service?: string;
  description?: string;
  name: string;
  default_route_action: GoogleComputeRegionUrlMapArgsDefaultRouteAction;
  default_url_redirect: GoogleComputeRegionUrlMapArgsDefaultUrlRedirect;
  host_rule: GoogleComputeRegionUrlMapArgsHostRule;
  path_matcher: GoogleComputeRegionUrlMapArgsPathMatcher;
  test: GoogleComputeRegionUrlMapArgsTest;
  timeouts?: GoogleComputeRegionUrlMapArgsTimeouts;
}

export class google_compute_region_url_map extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly map_id!: number;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionUrlMapArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_url_map");
  }
}
