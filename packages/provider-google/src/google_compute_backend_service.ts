import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeBackendServiceArgsBackend {
  balancing_mode?: string;
  capacity_scaler?: number;
  description?: string;
  group: string;
}

export interface GoogleComputeBackendServiceArgsCdnPolicyBypassCacheOnRequestHeaders {
  header_name: string;
}

export interface GoogleComputeBackendServiceArgsCdnPolicyCacheKeyPolicy {
  include_host?: boolean;
  include_http_headers?: string[];
  include_named_cookies?: string[];
  include_protocol?: boolean;
  include_query_string?: boolean;
  query_string_blacklist?: string[];
  query_string_whitelist?: string[];
}

export interface GoogleComputeBackendServiceArgsCdnPolicyNegativeCachingPolicy {
  code?: number;
  ttl?: number;
}

export interface GoogleComputeBackendServiceArgsCdnPolicy {
  signed_url_cache_max_age_sec?: number;
  bypass_cache_on_request_headers: GoogleComputeBackendServiceArgsCdnPolicyBypassCacheOnRequestHeaders;
  cache_key_policy: GoogleComputeBackendServiceArgsCdnPolicyCacheKeyPolicy;
  negative_caching_policy: GoogleComputeBackendServiceArgsCdnPolicyNegativeCachingPolicy;
}

export interface GoogleComputeBackendServiceArgsCircuitBreakers {
  max_connections?: number;
  max_pending_requests?: number;
  max_requests?: number;
  max_requests_per_connection?: number;
  max_retries?: number;
}

export interface GoogleComputeBackendServiceArgsConsistentHashHttpCookieTtl {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeBackendServiceArgsConsistentHashHttpCookie {
  name?: string;
  path?: string;
  ttl: GoogleComputeBackendServiceArgsConsistentHashHttpCookieTtl;
}

export interface GoogleComputeBackendServiceArgsConsistentHash {
  http_header_name?: string;
  minimum_ring_size?: number;
  http_cookie: GoogleComputeBackendServiceArgsConsistentHashHttpCookie;
}

export interface GoogleComputeBackendServiceArgsIap {
  enabled: boolean;
  oauth2_client_id?: string;
  oauth2_client_secret?: string;
}

export interface GoogleComputeBackendServiceArgsLocalityLbPoliciesCustomPolicy {
  data?: string;
  name: string;
}

export interface GoogleComputeBackendServiceArgsLocalityLbPoliciesPolicy {
  name: string;
}

export interface GoogleComputeBackendServiceArgsLocalityLbPolicies {
  custom_policy: GoogleComputeBackendServiceArgsLocalityLbPoliciesCustomPolicy;
  policy: GoogleComputeBackendServiceArgsLocalityLbPoliciesPolicy;
}

export interface GoogleComputeBackendServiceArgsLogConfig {
  enable?: boolean;
  sample_rate?: number;
}

export interface GoogleComputeBackendServiceArgsOutlierDetectionBaseEjectionTime {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeBackendServiceArgsOutlierDetectionInterval {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeBackendServiceArgsOutlierDetection {
  consecutive_errors?: number;
  consecutive_gateway_failure?: number;
  enforcing_consecutive_errors?: number;
  enforcing_consecutive_gateway_failure?: number;
  enforcing_success_rate?: number;
  max_ejection_percent?: number;
  success_rate_minimum_hosts?: number;
  success_rate_request_volume?: number;
  success_rate_stdev_factor?: number;
  base_ejection_time: GoogleComputeBackendServiceArgsOutlierDetectionBaseEjectionTime;
  interval: GoogleComputeBackendServiceArgsOutlierDetectionInterval;
}

export interface GoogleComputeBackendServiceArgsSecuritySettingsAwsV4Authentication {
  access_key?: string;
  access_key_id?: string;
  access_key_version?: string;
  origin_region?: string;
}

export interface GoogleComputeBackendServiceArgsSecuritySettings {
  client_tls_policy?: string;
  subject_alt_names?: string[];
  aws_v4_authentication: GoogleComputeBackendServiceArgsSecuritySettingsAwsV4Authentication;
}

export interface GoogleComputeBackendServiceArgsStrongSessionAffinityCookieTtl {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeBackendServiceArgsStrongSessionAffinityCookie {
  name?: string;
  path?: string;
  ttl: GoogleComputeBackendServiceArgsStrongSessionAffinityCookieTtl;
}

export interface GoogleComputeBackendServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeBackendServiceArgs {
  affinity_cookie_ttl_sec?: number;
  compression_mode?: string;
  connection_draining_timeout_sec?: number;
  custom_request_headers?: string[];
  custom_response_headers?: string[];
  description?: string;
  edge_security_policy?: string;
  enable_cdn?: boolean;
  health_checks?: string[];
  ip_address_selection_policy?: string;
  load_balancing_scheme?: string;
  locality_lb_policy?: string;
  name: string;
  security_policy?: string;
  service_lb_policy?: string;
  backend: GoogleComputeBackendServiceArgsBackend;
  cdn_policy: GoogleComputeBackendServiceArgsCdnPolicy;
  circuit_breakers: GoogleComputeBackendServiceArgsCircuitBreakers;
  consistent_hash: GoogleComputeBackendServiceArgsConsistentHash;
  iap: GoogleComputeBackendServiceArgsIap;
  locality_lb_policies: GoogleComputeBackendServiceArgsLocalityLbPolicies;
  log_config: GoogleComputeBackendServiceArgsLogConfig;
  outlier_detection: GoogleComputeBackendServiceArgsOutlierDetection;
  security_settings: GoogleComputeBackendServiceArgsSecuritySettings;
  strong_session_affinity_cookie: GoogleComputeBackendServiceArgsStrongSessionAffinityCookie;
  timeouts?: GoogleComputeBackendServiceArgsTimeouts;
}

export class google_compute_backend_service extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly generated_id!: number;
  readonly id?: string;
  readonly port_name?: string;
  readonly project?: string;
  readonly protocol?: string;
  readonly self_link!: string;
  readonly session_affinity?: string;
  readonly timeout_sec?: number;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeBackendServiceArgs) {
    super(config, "resource", args, resourceName, "google_compute_backend_service");
  }
}
