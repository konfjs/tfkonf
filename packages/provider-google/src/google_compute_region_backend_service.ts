import { TerraformConfig, TerraformResource } from "tfs";
export interface Backend {
  balancing_mode?: string;
  capacity_scaler?: number;
  description?: string;
  group: string;
  max_connections?: number;
  max_connections_per_endpoint?: number;
  max_connections_per_instance?: number;
  max_rate?: number;
  max_rate_per_endpoint?: number;
  max_rate_per_instance?: number;
  max_utilization?: number;
}
export interface CacheKeyPolicy {
  include_host?: boolean;
  include_named_cookies?: string[];
  include_protocol?: boolean;
  include_query_string?: boolean;
  query_string_blacklist?: string[];
  query_string_whitelist?: string[];
}
export interface NegativeCachingPolicy {
  code?: number;
}
export interface CdnPolicy {
  signed_url_cache_max_age_sec?: number;
  cache_key_policy: CacheKeyPolicy;
  negative_caching_policy: NegativeCachingPolicy;
}
export interface CircuitBreakers {
  max_connections?: number;
  max_pending_requests?: number;
  max_requests?: number;
  max_requests_per_connection?: number;
  max_retries?: number;
}
export interface Ttl {
  nanos?: number;
  seconds: number;
}
export interface HttpCookie {
  name?: string;
  path?: string;
  ttl: Ttl;
}
export interface ConsistentHash {
  http_header_name?: string;
  minimum_ring_size?: number;
  http_cookie: HttpCookie;
}
export interface FailoverPolicy {
  failover_ratio?: number;
}
export interface Iap {
  enabled: boolean;
  oauth2_client_id?: string;
  oauth2_client_secret?: string;
}
export interface LogConfig {
  enable?: boolean;
  sample_rate?: number;
}
export interface BaseEjectionTime {
  nanos?: number;
  seconds: number;
}
export interface Interval {
  nanos?: number;
  seconds: number;
}
export interface OutlierDetection {
  consecutive_errors?: number;
  consecutive_gateway_failure?: number;
  enforcing_consecutive_errors?: number;
  enforcing_consecutive_gateway_failure?: number;
  enforcing_success_rate?: number;
  max_ejection_percent?: number;
  success_rate_minimum_hosts?: number;
  success_rate_request_volume?: number;
  success_rate_stdev_factor?: number;
  base_ejection_time: BaseEjectionTime;
  interval: Interval;
}
export interface Ttl {
  nanos?: number;
  seconds: number;
}
export interface StrongSessionAffinityCookie {
  name?: string;
  path?: string;
  ttl: Ttl;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionBackendServiceArgs {
  affinity_cookie_ttl_sec?: number;
  connection_draining_timeout_sec?: number;
  description?: string;
  enable_cdn?: boolean;
  health_checks?: string[];
  ip_address_selection_policy?: string;
  load_balancing_scheme?: string;
  locality_lb_policy?: string;
  name: string;
  network?: string;
  backend: Backend;
  cdn_policy: CdnPolicy;
  circuit_breakers: CircuitBreakers;
  consistent_hash: ConsistentHash;
  failover_policy: FailoverPolicy;
  iap: Iap;
  log_config: LogConfig;
  outlier_detection: OutlierDetection;
  strong_session_affinity_cookie: StrongSessionAffinityCookie;
  timeouts: Timeouts;
}
export class google_compute_region_backend_service extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly generated_id!: number;
  readonly id?: string;
  readonly port_name?: string;
  readonly project?: string;
  readonly protocol?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly session_affinity?: string;
  readonly timeout_sec?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionBackendServiceArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_backend_service");
  }
}