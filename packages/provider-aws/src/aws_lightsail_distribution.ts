import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLightsailDistributionArgsCacheBehavior {
  behavior: string;
  path: string;
}
export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedCookies {
  cookies_allow_list?: string[];
  option?: string;
}
export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedHeaders {
  headers_allow_list?: string[];
  option?: string;
}
export interface AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedQueryStrings {
  option?: boolean;
  query_strings_allowed_list?: string[];
}
export interface AwsLightsailDistributionArgsCacheBehaviorSettings {
  allowed_http_methods?: string;
  cached_http_methods?: string;
  default_ttl?: number;
  maximum_ttl?: number;
  minimum_ttl?: number;
  forwarded_cookies: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedCookies;
  forwarded_headers: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedHeaders;
  forwarded_query_strings: AwsLightsailDistributionArgsCacheBehaviorSettingsForwardedQueryStrings;
}
export interface AwsLightsailDistributionArgsDefaultCacheBehavior {
  behavior: string;
}
export interface AwsLightsailDistributionArgsOrigin {
  name: string;
  protocol_policy?: string;
  region_name: string;
}
export interface AwsLightsailDistributionArgsTimeouts {
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
  cache_behavior: AwsLightsailDistributionArgsCacheBehavior;
  cache_behavior_settings: AwsLightsailDistributionArgsCacheBehaviorSettings;
  default_cache_behavior: AwsLightsailDistributionArgsDefaultCacheBehavior;
  origin: AwsLightsailDistributionArgsOrigin;
  timeouts?: AwsLightsailDistributionArgsTimeouts;
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