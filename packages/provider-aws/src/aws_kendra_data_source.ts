import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKendraDataSourceArgsconfigurationS3ConfigurationAccessControlListConfiguration {
  key_path?: string;
}
export interface AwsKendraDataSourceArgsconfigurationS3ConfigurationDocumentsMetadataConfiguration {
  s3_prefix?: string;
}
export interface AwsKendraDataSourceArgsconfigurationS3Configuration {
  bucket_name: string;
  exclusion_patterns?: string[];
  inclusion_patterns?: string[];
  inclusion_prefixes?: string[];
  access_control_list_configuration: AwsKendraDataSourceArgsconfigurationS3ConfigurationAccessControlListConfiguration;
  documents_metadata_configuration: AwsKendraDataSourceArgsconfigurationS3ConfigurationDocumentsMetadataConfiguration;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
  credentials: string;
  host: string;
  port: number;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationAuthenticationConfiguration {
  basic_authentication: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationProxyConfiguration {
  credentials?: string;
  host: string;
  port: number;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurlsSeedUrlConfiguration {
  seed_urls: string[];
  web_crawler_mode?: string;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurlsSiteMapsConfiguration {
  site_maps: string[];
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurls {
  seed_url_configuration: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurlsSeedUrlConfiguration;
  site_maps_configuration: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurlsSiteMapsConfiguration;
}
export interface AwsKendraDataSourceArgsconfigurationWebCrawlerConfiguration {
  crawl_depth?: number;
  max_content_size_per_page_in_mega_bytes?: number;
  max_links_per_page?: number;
  max_urls_per_minute_crawl_rate?: number;
  url_exclusion_patterns?: string[];
  url_inclusion_patterns?: string[];
  authentication_configuration: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationAuthenticationConfiguration;
  proxy_configuration: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationProxyConfiguration;
  urls: AwsKendraDataSourceArgsconfigurationWebCrawlerConfigurationurls;
}
export interface AwsKendraDataSourceArgsconfiguration {
  s3_configuration: AwsKendraDataSourceArgsconfigurationS3Configuration;
  web_crawler_configuration: AwsKendraDataSourceArgsconfigurationWebCrawlerConfiguration;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsconditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationscondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationsconditionConditionOnValue;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationstargetTargetDocumentAttributeValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationstarget {
  target_document_attribute_key?: string;
  target_document_attribute_value_deletion?: boolean;
  target_document_attribute_value: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationstargetTargetDocumentAttributeValue;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurations {
  document_content_deletion?: boolean;
  condition: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationscondition;
  target: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurationstarget;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue {
  date_value?: string;
  long_value?: number;
  string_list_value?: string[];
  string_value?: string;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
  condition_document_attribute_key: string;
  operator: string;
  condition_on_value: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
  lambda_arn: string;
  s3_bucket: string;
  invocation_condition: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
}
export interface AwsKendraDataSourceArgsCustomDocumentEnrichmentConfiguration {
  role_arn?: string;
  inline_configurations: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationInlineConfigurations;
  post_extraction_hook_configuration: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
  pre_extraction_hook_configuration: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
}
export interface AwsKendraDataSourceArgstimeouts {
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
  configuration: AwsKendraDataSourceArgsconfiguration;
  custom_document_enrichment_configuration: AwsKendraDataSourceArgsCustomDocumentEnrichmentConfiguration;
  timeouts: AwsKendraDataSourceArgstimeouts;
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