import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontDistributionArgsCustomErrorResponse {
  error_caching_min_ttl?: number;
  error_code: number;
  response_code?: number;
  response_page_path?: string;
}
export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValuescookies {
  forward: string;
}
export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValues {
  query_string: boolean;
  cookies: AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValuescookies;
}
export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorFunctionAssociation {
  event_type: string;
  function_arn: string;
}
export interface AwsCloudfrontDistributionArgsDefaultCacheBehaviorLambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}
export interface AwsCloudfrontDistributionArgsDefaultCacheBehavior {
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
  forwarded_values: AwsCloudfrontDistributionArgsDefaultCacheBehaviorForwardedValues;
  function_association: AwsCloudfrontDistributionArgsDefaultCacheBehaviorFunctionAssociation;
  lambda_function_association: AwsCloudfrontDistributionArgsDefaultCacheBehaviorLambdaFunctionAssociation;
}
export interface AwsCloudfrontDistributionArgsLoggingConfig {
  bucket: string;
  include_cookies?: boolean;
  prefix?: string;
}
export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValuescookies {
  forward: string;
  whitelisted_names?: string[];
}
export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValues {
  query_string: boolean;
  cookies: AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValuescookies;
}
export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorFunctionAssociation {
  event_type: string;
  function_arn: string;
}
export interface AwsCloudfrontDistributionArgsOrderedCacheBehaviorLambdaFunctionAssociation {
  event_type: string;
  include_body?: boolean;
  lambda_arn: string;
}
export interface AwsCloudfrontDistributionArgsOrderedCacheBehavior {
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
  forwarded_values: AwsCloudfrontDistributionArgsOrderedCacheBehaviorForwardedValues;
  function_association: AwsCloudfrontDistributionArgsOrderedCacheBehaviorFunctionAssociation;
  lambda_function_association: AwsCloudfrontDistributionArgsOrderedCacheBehaviorLambdaFunctionAssociation;
}
export interface AwsCloudfrontDistributionArgsoriginCustomHeader {
  name: string;
  value: string;
}
export interface AwsCloudfrontDistributionArgsoriginCustomOriginConfig {
  http_port: number;
  https_port: number;
  origin_keepalive_timeout?: number;
  origin_protocol_policy: string;
  origin_read_timeout?: number;
  origin_ssl_protocols: string[];
}
export interface AwsCloudfrontDistributionArgsoriginOriginShield {
  enabled: boolean;
  origin_shield_region?: string;
}
export interface AwsCloudfrontDistributionArgsoriginS3OriginConfig {
  origin_access_identity: string;
}
export interface AwsCloudfrontDistributionArgsorigin {
  connection_attempts?: number;
  connection_timeout?: number;
  domain_name: string;
  origin_access_control_id?: string;
  origin_id: string;
  origin_path?: string;
  custom_header: AwsCloudfrontDistributionArgsoriginCustomHeader;
  custom_origin_config: AwsCloudfrontDistributionArgsoriginCustomOriginConfig;
  origin_shield: AwsCloudfrontDistributionArgsoriginOriginShield;
  s3_origin_config: AwsCloudfrontDistributionArgsoriginS3OriginConfig;
}
export interface AwsCloudfrontDistributionArgsOriginGroupFailoverCriteria {
  status_codes: number[];
}
export interface AwsCloudfrontDistributionArgsOriginGroupmember {
  origin_id: string;
}
export interface AwsCloudfrontDistributionArgsOriginGroup {
  origin_id: string;
  failover_criteria: AwsCloudfrontDistributionArgsOriginGroupFailoverCriteria;
  member: AwsCloudfrontDistributionArgsOriginGroupmember;
}
export interface AwsCloudfrontDistributionArgsrestrictionsGeoRestriction {
  restriction_type: string;
}
export interface AwsCloudfrontDistributionArgsrestrictions {
  geo_restriction: AwsCloudfrontDistributionArgsrestrictionsGeoRestriction;
}
export interface AwsCloudfrontDistributionArgsViewerCertificate {
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
  custom_error_response: AwsCloudfrontDistributionArgsCustomErrorResponse;
  default_cache_behavior: AwsCloudfrontDistributionArgsDefaultCacheBehavior;
  logging_config: AwsCloudfrontDistributionArgsLoggingConfig;
  ordered_cache_behavior: AwsCloudfrontDistributionArgsOrderedCacheBehavior;
  origin: AwsCloudfrontDistributionArgsorigin;
  origin_group: AwsCloudfrontDistributionArgsOriginGroup;
  restrictions: AwsCloudfrontDistributionArgsrestrictions;
  viewer_certificate: AwsCloudfrontDistributionArgsViewerCertificate;
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