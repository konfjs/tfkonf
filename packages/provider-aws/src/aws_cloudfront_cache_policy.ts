import { TerraformConfig, TerraformResource } from "tfs";
export interface Cookies {
  items?: string[];
}
export interface CookiesConfig {
  cookie_behavior: string;
  cookies: Cookies;
}
export interface Headers {
  items?: string[];
}
export interface HeadersConfig {
  header_behavior?: string;
  headers: Headers;
}
export interface QueryStrings {
  items?: string[];
}
export interface QueryStringsConfig {
  query_string_behavior: string;
  query_strings: QueryStrings;
}
export interface ParametersInCacheKeyAndForwardedToOrigin {
  enable_accept_encoding_brotli?: boolean;
  enable_accept_encoding_gzip?: boolean;
  cookies_config: CookiesConfig;
  headers_config: HeadersConfig;
  query_strings_config: QueryStringsConfig;
}
export interface AwsCloudfrontCachePolicyArgs {
  comment?: string;
  default_ttl?: number;
  max_ttl?: number;
  min_ttl?: number;
  name: string;
  parameters_in_cache_key_and_forwarded_to_origin: ParametersInCacheKeyAndForwardedToOrigin;
}
export class aws_cloudfront_cache_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontCachePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_cache_policy");
  }
}