import { TerraformConfig, TerraformResource } from "tfs";
export interface LogConfig {
  sample_rate?: number;
}
export interface HostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}
export interface RequestHeaderToAdd {
  header_name: string;
  header_value: string;
}
export interface RequestHeaderToRemove {
  header_name: string;
}
export interface ResponseHeaderToAdd {
  header_name: string;
  header_value: string;
}
export interface ResponseHeaderToRemove {
  header_name: string;
}
export interface HeaderAction {
  request_header_to_add: RequestHeaderToAdd;
  request_header_to_remove: RequestHeaderToRemove;
  response_header_to_add: ResponseHeaderToAdd;
  response_header_to_remove: ResponseHeaderToRemove;
}
export interface HeaderMatch {
  exact_match?: string;
  header_name: string;
  prefix_match?: string;
  present_match?: boolean;
  suffix_match?: string;
}
export interface QueryParameterMatch {
  exact_match?: string;
  name: string;
  present_match?: boolean;
}
export interface MatchRule {
  full_path_match?: string;
  path_template_match?: string;
  prefix_match?: string;
  header_match: HeaderMatch;
  query_parameter_match: QueryParameterMatch;
}
export interface AddSignatures {
  actions: string[];
  copied_parameters?: string[];
  keyset?: string;
  token_query_parameter?: string;
  token_ttl?: string;
}
export interface CacheKeyPolicy {
  exclude_query_string?: boolean;
  excluded_query_parameters?: string[];
  included_cookie_names?: string[];
  included_header_names?: string[];
  included_query_parameters?: string[];
}
export interface SignedTokenOptions {
  allowed_signature_algorithms?: string[];
  token_query_parameter?: string;
}
export interface CdnPolicy {
  client_ttl?: string;
  negative_caching?: boolean;
  negative_caching_policy?: {
    [key: string]: string;
  };
  signed_request_maximum_expiration_ttl?: string;
  add_signatures: AddSignatures;
  cache_key_policy: CacheKeyPolicy;
  signed_token_options: SignedTokenOptions;
}
export interface CorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age: string;
}
export interface UrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}
export interface RouteAction {
  cdn_policy: CdnPolicy;
  cors_policy: CorsPolicy;
  url_rewrite: UrlRewrite;
}
export interface UrlRedirect {
  host_redirect?: string;
  path_redirect?: string;
  prefix_redirect?: string;
}
export interface RouteRule {
  description?: string;
  origin?: string;
  priority: string;
  header_action: HeaderAction;
  match_rule: MatchRule;
  route_action: RouteAction;
  url_redirect: UrlRedirect;
}
export interface PathMatcher {
  description?: string;
  name: string;
  route_rule: RouteRule;
}
export interface Routing {
  host_rule: HostRule;
  path_matcher: PathMatcher;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgs {
  description?: string;
  disable_http2?: boolean;
  edge_security_policy?: string;
  edge_ssl_certificates?: string[];
  labels?: {
    [key: string]: string;
  };
  name: string;
  ssl_policy?: string;
  log_config: LogConfig;
  routing: Routing;
  timeouts: Timeouts;
}
export class google_network_services_edge_cache_service extends TerraformResource {
  readonly disable_quic?: boolean;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly ipv4_addresses!: string[];
  readonly ipv6_addresses!: string[];
  readonly project?: string;
  readonly require_tls?: boolean;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheServiceArgs) {
    super(config, "resource", args, resourceName, "google_network_services_edge_cache_service");
  }
}