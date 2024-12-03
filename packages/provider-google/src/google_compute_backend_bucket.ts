import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeBackendBucketArgsCdnPolicyBypassCacheOnRequestHeaders {
  header_name?: string;
}
export interface GoogleComputeBackendBucketArgsCdnPolicyCacheKeyPolicy {
  include_http_headers?: string[];
  query_string_whitelist?: string[];
}
export interface GoogleComputeBackendBucketArgsCdnPolicyNegativeCachingPolicy {
  code?: number;
  ttl?: number;
}
export interface GoogleComputeBackendBucketArgsCdnPolicy {
  request_coalescing?: boolean;
  signed_url_cache_max_age_sec?: number;
  bypass_cache_on_request_headers: GoogleComputeBackendBucketArgsCdnPolicyBypassCacheOnRequestHeaders;
  cache_key_policy: GoogleComputeBackendBucketArgsCdnPolicyCacheKeyPolicy;
  negative_caching_policy: GoogleComputeBackendBucketArgsCdnPolicyNegativeCachingPolicy;
}
export interface GoogleComputeBackendBucketArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeBackendBucketArgs {
  bucket_name: string;
  compression_mode?: string;
  custom_response_headers?: string[];
  description?: string;
  edge_security_policy?: string;
  enable_cdn?: boolean;
  name: string;
  cdn_policy: GoogleComputeBackendBucketArgsCdnPolicy;
  timeouts?: GoogleComputeBackendBucketArgsTimeouts;
}
export class google_compute_backend_bucket extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeBackendBucketArgs) {
    super(config, "resource", args, resourceName, "google_compute_backend_bucket");
  }
}