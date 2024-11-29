import { TerraformConfig, TerraformResource } from "tfs";
export interface CacheBehavior {
  behavior: string;
  path: string;
}
export interface ForwardedCookies {
  cookies_allow_list?: string[];
  option?: string;
}
export interface ForwardedHeaders {
  headers_allow_list?: string[];
  option?: string;
}
export interface ForwardedQueryStrings {
  option?: boolean;
  query_strings_allowed_list?: string[];
}
export interface CacheBehaviorSettings {
  allowed_http_methods?: string;
  cached_http_methods?: string;
  default_ttl?: number;
  maximum_ttl?: number;
  minimum_ttl?: number;
  forwarded_cookies: ForwardedCookies;
  forwarded_headers: ForwardedHeaders;
  forwarded_query_strings: ForwardedQueryStrings;
}
export interface DefaultCacheBehavior {
  behavior: string;
}
export interface Origin {
  name: string;
  protocol_policy?: string;
  region_name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLightsailDistributionArgs {
  bundle_id: string;
  certificate_name?: string;
  ip_address_type?: string;
  is_enabled?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
  cache_behavior: CacheBehavior;
  cache_behavior_settings: CacheBehaviorSettings;
  default_cache_behavior: DefaultCacheBehavior;
  origin: Origin;
  timeouts: Timeouts;
}
export class aws_lightsail_distribution extends TerraformResource {
  readonly alternative_domain_names!: string[];
  readonly arn!: string;
  readonly created_at!: string;
  readonly domain_name!: string;
  readonly id?: string;
  readonly location!: any[];
  readonly origin_public_dns!: string;
  readonly resource_type!: string;
  readonly status!: string;
  readonly support_code!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDistributionArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_distribution");
  }
}