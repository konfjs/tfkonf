import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessControlAllowHeaders {
  items?: string[];
}
export interface AccessControlAllowMethods {
  items?: string[];
}
export interface AccessControlAllowOrigins {
  items?: string[];
}
export interface AccessControlExposeHeaders {
  items?: string[];
}
export interface CorsConfig {
  access_control_allow_credentials: boolean;
  access_control_max_age_sec?: number;
  origin_override: boolean;
  access_control_allow_headers: AccessControlAllowHeaders;
  access_control_allow_methods: AccessControlAllowMethods;
  access_control_allow_origins: AccessControlAllowOrigins;
  access_control_expose_headers: AccessControlExposeHeaders;
}
export interface Items {
  header: string;
  override: boolean;
  value: string;
}
export interface CustomHeadersConfig {
  items: Items;
}
export interface Items {
  header: string;
}
export interface RemoveHeadersConfig {
  items: Items;
}
export interface ContentSecurityPolicy {
  content_security_policy: string;
  override: boolean;
}
export interface ContentTypeOptions {
  override: boolean;
}
export interface FrameOptions {
  frame_option: string;
  override: boolean;
}
export interface ReferrerPolicy {
  override: boolean;
  referrer_policy: string;
}
export interface StrictTransportSecurity {
  access_control_max_age_sec: number;
  include_subdomains?: boolean;
  override: boolean;
  preload?: boolean;
}
export interface XssProtection {
  mode_block?: boolean;
  override: boolean;
  protection: boolean;
  report_uri?: string;
}
export interface SecurityHeadersConfig {
  content_security_policy: ContentSecurityPolicy;
  content_type_options: ContentTypeOptions;
  frame_options: FrameOptions;
  referrer_policy: ReferrerPolicy;
  strict_transport_security: StrictTransportSecurity;
  xss_protection: XssProtection;
}
export interface ServerTimingHeadersConfig {
  enabled: boolean;
  sampling_rate: number;
}
export interface AwsCloudfrontResponseHeadersPolicyArgs {
  comment?: string;
  name: string;
  cors_config: CorsConfig;
  custom_headers_config: CustomHeadersConfig;
  remove_headers_config: RemoveHeadersConfig;
  security_headers_config: SecurityHeadersConfig;
  server_timing_headers_config: ServerTimingHeadersConfig;
}
export class aws_cloudfront_response_headers_policy extends TerraformResource {
  readonly etag?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontResponseHeadersPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_response_headers_policy");
  }
}