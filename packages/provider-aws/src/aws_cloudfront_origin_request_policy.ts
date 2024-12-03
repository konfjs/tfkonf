import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontOriginRequestPolicyArgsCookiesConfigCookies {
  items?: string[];
}
export interface AwsCloudfrontOriginRequestPolicyArgsCookiesConfig {
  cookie_behavior: string;
  cookies: AwsCloudfrontOriginRequestPolicyArgsCookiesConfigCookies;
}
export interface AwsCloudfrontOriginRequestPolicyArgsHeadersConfigHeaders {
  items?: string[];
}
export interface AwsCloudfrontOriginRequestPolicyArgsHeadersConfig {
  header_behavior?: string;
  headers: AwsCloudfrontOriginRequestPolicyArgsHeadersConfigHeaders;
}
export interface AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfigQueryStrings {
  items?: string[];
}
export interface AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfig {
  query_string_behavior: string;
  query_strings: AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfigQueryStrings;
}
export interface AwsCloudfrontOriginRequestPolicyArgs {
  comment?: string;
  name: string;
  cookies_config: AwsCloudfrontOriginRequestPolicyArgsCookiesConfig;
  headers_config: AwsCloudfrontOriginRequestPolicyArgsHeadersConfig;
  query_strings_config: AwsCloudfrontOriginRequestPolicyArgsQueryStringsConfig;
}
export class aws_cloudfront_origin_request_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontOriginRequestPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_origin_request_policy");
  }
}