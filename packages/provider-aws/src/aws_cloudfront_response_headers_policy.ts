import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowHeaders {
  items?: string[];
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowMethods {
  items?: string[];
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowOrigins {
  items?: string[];
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlExposeHeaders {
  items?: string[];
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCorsConfig {
  access_control_allow_credentials: boolean;
  access_control_max_age_sec?: number;
  origin_override: boolean;
  access_control_allow_headers: AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowHeaders;
  access_control_allow_methods: AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowMethods;
  access_control_allow_origins: AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlAllowOrigins;
  access_control_expose_headers: AwsCloudfrontResponseHeadersPolicyArgsCorsConfigAccessControlExposeHeaders;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCustomHeadersConfigItems {
  header: string;
  override: boolean;
  value: string;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsCustomHeadersConfig {
  items: AwsCloudfrontResponseHeadersPolicyArgsCustomHeadersConfigItems;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsRemoveHeadersConfigItems {
  header: string;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsRemoveHeadersConfig {
  items: AwsCloudfrontResponseHeadersPolicyArgsRemoveHeadersConfigItems;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigContentSecurityPolicy {
  content_security_policy: string;
  override: boolean;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigContentTypeOptions {
  override: boolean;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigFrameOptions {
  frame_option: string;
  override: boolean;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigReferrerPolicy {
  override: boolean;
  referrer_policy: string;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigStrictTransportSecurity {
  access_control_max_age_sec: number;
  include_subdomains?: boolean;
  override: boolean;
  preload?: boolean;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigXssProtection {
  mode_block?: boolean;
  override: boolean;
  protection: boolean;
  report_uri?: string;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfig {
  content_security_policy: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigContentSecurityPolicy;
  content_type_options: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigContentTypeOptions;
  frame_options: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigFrameOptions;
  referrer_policy: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigReferrerPolicy;
  strict_transport_security: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigStrictTransportSecurity;
  xss_protection: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfigXssProtection;
}
export interface AwsCloudfrontResponseHeadersPolicyArgsServerTimingHeadersConfig {
  enabled: boolean;
  sampling_rate: number;
}
export interface AwsCloudfrontResponseHeadersPolicyArgs {
  comment?: string;
  name: string;
  cors_config: AwsCloudfrontResponseHeadersPolicyArgsCorsConfig;
  custom_headers_config: AwsCloudfrontResponseHeadersPolicyArgsCustomHeadersConfig;
  remove_headers_config: AwsCloudfrontResponseHeadersPolicyArgsRemoveHeadersConfig;
  security_headers_config: AwsCloudfrontResponseHeadersPolicyArgsSecurityHeadersConfig;
  server_timing_headers_config: AwsCloudfrontResponseHeadersPolicyArgsServerTimingHeadersConfig;
}
export class aws_cloudfront_response_headers_policy extends TerraformResource {
  readonly etag?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontResponseHeadersPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_response_headers_policy");
  }
}