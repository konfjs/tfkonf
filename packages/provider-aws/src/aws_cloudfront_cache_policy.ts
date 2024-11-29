import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfigcookies {
  items?: string[];
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  cookie_behavior: string;
  cookies: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfigcookies;
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfigheaders {
  items?: string[];
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  header_behavior?: string;
  headers: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfigheaders;
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  items?: string[];
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  query_string_behavior: string;
  query_strings: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}
export interface AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOrigin {
  enable_accept_encoding_brotli?: boolean;
  enable_accept_encoding_gzip?: boolean;
  cookies_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  headers_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  query_strings_config: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}
export interface AwsCloudfrontCachePolicyArgs {
  comment?: string;
  default_ttl?: number;
  max_ttl?: number;
  min_ttl?: number;
  name: string;
  parameters_in_cache_key_and_forwarded_to_origin: AwsCloudfrontCachePolicyArgsParametersInCacheKeyAndForwardedToOrigin;
}
export class aws_cloudfront_cache_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontCachePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_cache_policy");
  }
}