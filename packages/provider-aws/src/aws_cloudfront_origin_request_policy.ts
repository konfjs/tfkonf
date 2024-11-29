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
export interface AwsCloudfrontOriginRequestPolicyArgs {
  comment?: string;
  name: string;
  cookies_config: CookiesConfig;
  headers_config: HeadersConfig;
  query_strings_config: QueryStringsConfig;
}
export class aws_cloudfront_origin_request_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontOriginRequestPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_origin_request_policy");
  }
}