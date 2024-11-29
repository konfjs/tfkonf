import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkServicesEdgeCacheServiceArgsLogConfig {
  sample_rate?: number;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingHostRule {
  description?: string;
  hosts: string[];
  path_matcher: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd {
  header_name: string;
  header_value: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
  header_name: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
  header_name: string;
  header_value: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove {
  header_name: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderAction {
  request_header_to_add: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd;
  request_header_to_remove: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove;
  response_header_to_add: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd;
  response_header_to_remove: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  exact_match?: string;
  header_name: string;
  prefix_match?: string;
  present_match?: boolean;
  suffix_match?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  exact_match?: string;
  name: string;
  present_match?: boolean;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRule {
  full_path_match?: string;
  path_template_match?: string;
  prefix_match?: string;
  header_match: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRuleHeaderMatch;
  query_parameter_match: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRuleQueryParameterMatch;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures {
  actions: string[];
  copied_parameters?: string[];
  keyset?: string;
  token_query_parameter?: string;
  token_ttl?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
  exclude_query_string?: boolean;
  excluded_query_parameters?: string[];
  included_cookie_names?: string[];
  included_header_names?: string[];
  included_query_parameters?: string[];
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions {
  allowed_signature_algorithms?: string[];
  token_query_parameter?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicy {
  client_ttl?: string;
  negative_caching?: boolean;
  negative_caching_policy?: {
    [key: string]: string;
  };
  signed_request_maximum_expiration_ttl?: string;
  add_signatures: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;
  cache_key_policy: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
  signed_token_options: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCorsPolicy {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  disabled?: boolean;
  expose_headers?: string[];
  max_age: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionUrlRewrite {
  host_rewrite?: string;
  path_prefix_rewrite?: string;
  path_template_rewrite?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteAction {
  cdn_policy: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCdnPolicy;
  cors_policy: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionCorsPolicy;
  url_rewrite: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteActionUrlRewrite;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleUrlRedirect {
  host_redirect?: string;
  path_redirect?: string;
  prefix_redirect?: string;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRule {
  description?: string;
  origin?: string;
  priority: string;
  header_action: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleHeaderAction;
  match_rule: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleMatchRule;
  route_action: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleRouteAction;
  url_redirect: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRuleUrlRedirect;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcher {
  description?: string;
  name: string;
  route_rule: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcherRouteRule;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgsrouting {
  host_rule: GoogleNetworkServicesEdgeCacheServiceArgsroutingHostRule;
  path_matcher: GoogleNetworkServicesEdgeCacheServiceArgsroutingPathMatcher;
}
export interface GoogleNetworkServicesEdgeCacheServiceArgstimeouts {
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
  log_config: GoogleNetworkServicesEdgeCacheServiceArgsLogConfig;
  routing: GoogleNetworkServicesEdgeCacheServiceArgsrouting;
  timeouts: GoogleNetworkServicesEdgeCacheServiceArgstimeouts;
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