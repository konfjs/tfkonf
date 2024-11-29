import { TerraformConfig, TerraformResource } from "tfs";
export interface CorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface Abort {
  http_status?: number;
  percentage?: number;
}
export interface FixedDelay {
  nanos?: number;
  seconds?: string;
}
export interface Delay {
  percentage?: number;
  fixed_delay: FixedDelay;
}
export interface FaultInjectionPolicy {
  abort: Abort;
  delay: Delay;
}
export interface RequestMirrorPolicy {
  backend_service?: string;
}
export interface PerTryTimeout {
  nanos?: number;
  seconds?: string;
}
export interface RetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: PerTryTimeout;
}
export interface Timeout {
  nanos?: number;
  seconds?: string;
}
export interface UrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}
export interface RequestHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface ResponseHeadersToAdd {
  header_name?: string;
  header_value?: string;
  replace?: boolean;
}
export interface HeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: RequestHeadersToAdd;
  response_headers_to_add: ResponseHeadersToAdd;
}
export interface WeightedBackendServices {
  backend_service?: string;
  weight?: number;
  header_action: HeaderAction;
}
export interface DefaultRouteAction {
  cors_policy: CorsPolicy;
  fault_injection_policy: FaultInjectionPolicy;
  request_mirror_policy: RequestMirrorPolicy;
  retry_policy: RetryPolicy;
  timeout: Timeout;
  url_rewrite: UrlRewrite;
  weighted_backend_services: WeightedBackendServices;
}
export interface DefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface HostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}
export interface DefaultUrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface CorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface Abort {
  http_status: number;
  percentage: number;
}
export interface FixedDelay {
  nanos?: number;
  seconds: string;
}
export interface Delay {
  percentage: number;
  fixed_delay: FixedDelay;
}
export interface FaultInjectionPolicy {
  abort: Abort;
  delay: Delay;
}
export interface RequestMirrorPolicy {
  backend_service: string;
}
export interface PerTryTimeout {
  nanos?: number;
  seconds: string;
}
export interface RetryPolicy {
  num_retries?: number;
  retry_conditions?: string[];
  per_try_timeout: PerTryTimeout;
}
export interface Timeout {
  nanos?: number;
  seconds: string;
}
export interface UrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
}
export interface RequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface ResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface HeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: RequestHeadersToAdd;
  response_headers_to_add: ResponseHeadersToAdd;
}
export interface WeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: HeaderAction;
}
export interface RouteAction {
  cors_policy: CorsPolicy;
  fault_injection_policy: FaultInjectionPolicy;
  request_mirror_policy: RequestMirrorPolicy;
  retry_policy: RetryPolicy;
  timeout: Timeout;
  url_rewrite: UrlRewrite;
  weighted_backend_services: WeightedBackendServices;
}
export interface UrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query: boolean;
}
export interface PathRule {
  paths: string[];
  service?: string;
  route_action: RouteAction;
  url_redirect: UrlRedirect;
}
export interface RequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface ResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface HeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: RequestHeadersToAdd;
  response_headers_to_add: ResponseHeadersToAdd;
}
export interface RangeMatch {
  range_end: number;
  range_start: number;
}
export interface HeaderMatches {
  exact_match?: string;
  header_name: string;
  invert_match?: boolean;
  prefix_match?: string;
  present_match?: boolean;
  regex_match?: string;
  suffix_match?: string;
  range_match: RangeMatch;
}
export interface FilterLabels {
  name: string;
  value: string;
}
export interface MetadataFilters {
  filter_match_criteria: string;
  filter_labels: FilterLabels;
}
export interface QueryParameterMatches {
  exact_match?: string;
  name: string;
  present_match?: boolean;
  regex_match?: string;
}
export interface MatchRules {
  full_path_match?: string;
  ignore_case?: boolean;
  path_template_match?: string;
  prefix_match?: string;
  regex_match?: string;
  header_matches: HeaderMatches;
  metadata_filters: MetadataFilters;
  query_parameter_matches: QueryParameterMatches;
}
export interface CorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origin_regexes?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age?: number;
}
export interface Abort {
  http_status?: number;
  percentage?: number;
}
export interface FixedDelay {
  nanos?: number;
  seconds: string;
}
export interface Delay {
  percentage?: number;
  fixed_delay: FixedDelay;
}
export interface FaultInjectionPolicy {
  abort: Abort;
  delay: Delay;
}
export interface RequestMirrorPolicy {
  backend_service: string;
}
export interface PerTryTimeout {
  nanos?: number;
  seconds: string;
}
export interface RetryPolicy {
  num_retries: number;
  retry_conditions?: string[];
  per_try_timeout: PerTryTimeout;
}
export interface Timeout {
  nanos?: number;
  seconds: string;
}
export interface UrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}
export interface RequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface ResponseHeadersToAdd {
  header_name: string;
  header_value: string;
  replace: boolean;
}
export interface HeaderAction {
  request_headers_to_remove?: string[];
  response_headers_to_remove?: string[];
  request_headers_to_add: RequestHeadersToAdd;
  response_headers_to_add: ResponseHeadersToAdd;
}
export interface WeightedBackendServices {
  backend_service: string;
  weight: number;
  header_action: HeaderAction;
}
export interface RouteAction {
  cors_policy: CorsPolicy;
  fault_injection_policy: FaultInjectionPolicy;
  request_mirror_policy: RequestMirrorPolicy;
  retry_policy: RetryPolicy;
  timeout: Timeout;
  url_rewrite: UrlRewrite;
  weighted_backend_services: WeightedBackendServices;
}
export interface UrlRedirect {
  host_redirect?: string;
  https_redirect?: boolean;
  path_redirect?: string;
  prefix_redirect?: string;
  redirect_response_code?: string;
  strip_query?: boolean;
}
export interface RouteRules {
  priority: number;
  service?: string;
  header_action: HeaderAction;
  match_rules: MatchRules;
  route_action: RouteAction;
  url_redirect: UrlRedirect;
}
export interface PathMatcher {
  default_service?: string;
  description?: string;
  name: string;
  default_url_redirect: DefaultUrlRedirect;
  path_rule: PathRule;
  route_rules: RouteRules;
}
export interface Test {
  description?: string;
  host: string;
  path: string;
  service: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionUrlMapArgs {
  default_service?: string;
  description?: string;
  name: string;
  default_route_action: DefaultRouteAction;
  default_url_redirect: DefaultUrlRedirect;
  host_rule: HostRule;
  path_matcher: PathMatcher;
  test: Test;
  timeouts: Timeouts;
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