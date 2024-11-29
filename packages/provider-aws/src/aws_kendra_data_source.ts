import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessControlListConfiguration {
  key_path?: string;
}
export interface DocumentsMetadataConfiguration {
  s3_prefix?: string;
}
export interface S3Configuration {
  bucket_name: string;
  exclusion_patterns?: string[];
  inclusion_patterns?: string[];
  inclusion_prefixes?: string[];
  access_control_list_configuration: AccessControlListConfiguration;
  documents_metadata_configuration: DocumentsMetadataConfiguration;
}
export interface BasicAuthentication {
  credentials: string;
  host: string;
  port: number;
}
export interface AuthenticationConfiguration {
  basic_authentication: BasicAuthentication;
}
export interface ProxyConfiguration {
  credentials?: string;
  host: string;
  port: number;
}
export interface SeedUrlConfiguration {
  seed_urls: string[];
  web_crawler_mode?: string;
}
export interface SiteMapsConfiguration {
  site_maps: string[];
}
export interface Urls {
  seed_url_configuration: SeedUrlConfiguration;
  site_maps_configuration: SiteMapsConfiguration;
}
export interface WebCrawlerConfiguration {
  crawl_depth?: number;
  max_content_size_per_page_in_mega_bytes?: number;
  max_links_per_page?: number;
  max_urls_per_minute_crawl_rate?: number;
  url_exclusion_patterns?: string[];
  url_inclusion_patterns?: string[];
  authentication_configuration: AuthenticationConfiguration;
  proxy_configuration: ProxyConfiguration;
  urls: Urls;
}
export interface Configuration {
  s3_configuration: S3Configuration;
  web_crawler_configuration: WebCrawlerConfiguration;
}
export interface ConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface Condition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: ConditionOnValue;
}
export interface TargetDocumentAttributeValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface Target {
  target_document_attribute_key?: string;
  target_document_attribute_value_deletion?: boolean;
  target_document_attribute_value: TargetDocumentAttributeValue;
}
export interface InlineConfigurations {
  document_content_deletion?: boolean;
  condition: Condition;
  target: Target;
}
export interface ConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface InvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: ConditionOnValue;
}
export interface PostExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition: InvocationCondition;
}
export interface ConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface InvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: ConditionOnValue;
}
export interface PreExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition: InvocationCondition;
}
export interface CustomDocumentEnrichmentConfiguration {
  role_arn?: string;
  inline_configurations: InlineConfigurations;
  post_extraction_hook_configuration: PostExtractionHookConfiguration;
  pre_extraction_hook_configuration: PreExtractionHookConfiguration;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraDataSourceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn?: string;
  schedule?: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  configuration: Configuration;
  custom_document_enrichment_configuration: CustomDocumentEnrichmentConfiguration;
  timeouts: Timeouts;
}
export class aws_kendra_data_source extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly data_source_id!: string;
  readonly error_message!: string;
  readonly id?: string;
  readonly language_code?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKendraDataSourceArgs) {
    super(config, "resource", args, resourceName, "aws_kendra_data_source");
  }
}