import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomErrorResponse {
  error_caching_min_ttl?: number;
  error_code: number;
  response_code?: number;
  response_page_path?: string;
}
export interface Cookies {
  forward: string;
}
export interface ForwardedValues {
  query_string: boolean;
  cookies: Cookies;
}
export interface FunctionAssociation {
  event_type: string;
  function_arn: string;
}
export interface LambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}
export interface DefaultCacheBehavior {
  allowed_methods: string[];
  cache_policy_id?: string;
  cached_methods: string[];
  compress?: boolean;
  field_level_encryption_id?: string;
  min_ttl?: number;
  origin_request_policy_id?: string;
  realtime_log_config_arn?: string;
  response_headers_policy_id?: string;
  smooth_streaming?: boolean;
  target_origin_id: string;
  viewer_protocol_policy: string;
  forwarded_values: ForwardedValues;
  function_association: FunctionAssociation;
  lambda_function_association: LambdaFunctionAssociation;
}
export interface LoggingConfig {
  bucket: string;
  include_cookies?: boolean;
  prefix?: string;
}
export interface Cookies {
  forward: string;
  whitelisted_names?: string[];
}
export interface ForwardedValues {
  query_string: boolean;
  cookies: Cookies;
}
export interface FunctionAssociation {
  event_type: string;
  function_arn: string;
}
export interface LambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}
export interface OrderedCacheBehavior {
  allowed_methods: string[];
  cache_policy_id?: string;
  cached_methods: string[];
  compress?: boolean;
  field_level_encryption_id?: string;
  min_ttl?: number;
  origin_request_policy_id?: string;
  path_pattern: string;
  realtime_log_config_arn?: string;
  response_headers_policy_id?: string;
  smooth_streaming?: boolean;
  target_origin_id: string;
  trusted_key_groups?: string[];
  trusted_signers?: string[];
  viewer_protocol_policy: string;
  forwarded_values: ForwardedValues;
  function_association: FunctionAssociation;
  lambda_function_association: LambdaFunctionAssociation;
}
export interface CustomHeader {
  name: string;
  value: string;
}
export interface CustomOriginConfig {
  http_port: number;
  https_port: number;
  origin_keepalive_timeout?: number;
  origin_protocol_policy: string;
  origin_read_timeout?: number;
  origin_ssl_protocols: string[];
}
export interface OriginShield {
  enabled: boolean;
  origin_shield_region?: string;
}
export interface S3OriginConfig {
  origin_access_identity: string;
}
export interface Origin {
  connection_attempts?: number;
  connection_timeout?: number;
  domain_name: string;
  origin_access_control_id?: string;
  origin_id: string;
  origin_path?: string;
  custom_header: CustomHeader;
  custom_origin_config: CustomOriginConfig;
  origin_shield: OriginShield;
  s3_origin_config: S3OriginConfig;
}
export interface FailoverCriteria {
  status_codes: number[];
}
export interface Member {
  origin_id: string;
}
export interface OriginGroup {
  origin_id: string;
  failover_criteria: FailoverCriteria;
  member: Member;
}
export interface GeoRestriction {
  restriction_type: string;
}
export interface Restrictions {
  geo_restriction: GeoRestriction;
}
export interface ViewerCertificate {
  acm_certificate_arn?: string;
  cloudfront_default_certificate?: boolean;
  iam_certificate_id?: string;
  minimum_protocol_version?: string;
  ssl_support_method?: string;
}
export interface AwsCloudfrontDistributionArgs {
  aliases?: string[];
  comment?: string;
  default_root_object?: string;
  enabled: boolean;
  http_version?: string;
  is_ipv6_enabled?: boolean;
  price_class?: string;
  retain_on_delete?: boolean;
  staging?: boolean;
  tags?: {
    [key: string]: string;
  };
  wait_for_deployment?: boolean;
  web_acl_id?: string;
  custom_error_response: CustomErrorResponse;
  default_cache_behavior: DefaultCacheBehavior;
  logging_config: LoggingConfig;
  ordered_cache_behavior: OrderedCacheBehavior;
  origin: Origin;
  origin_group: OriginGroup;
  restrictions: Restrictions;
  viewer_certificate: ViewerCertificate;
}
export class aws_cloudfront_distribution extends TerraformResource {
  readonly arn!: string;
  readonly caller_reference!: string;
  readonly continuous_deployment_policy_id?: string;
  readonly domain_name!: string;
  readonly etag!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly in_progress_validation_batches!: number;
  readonly last_modified_time!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly trusted_key_groups!: any[];
  readonly trusted_signers!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontDistributionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_distribution");
  }
}