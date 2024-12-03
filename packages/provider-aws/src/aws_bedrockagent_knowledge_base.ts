import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
  embedding_model_arn: string;
}
export interface AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfiguration {
  type: string;
  vector_knowledge_base_configuration: AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfiguration {
  collection_arn: string;
  vector_index_name: string;
  field_mapping: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfigurationFieldMapping;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfiguration {
  connection_string: string;
  credentials_secret_arn: string;
  namespace?: string;
  field_mapping: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfigurationFieldMapping;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfigurationFieldMapping {
  metadata_field: string;
  primary_key_field: string;
  text_field: string;
  vector_field: string;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfiguration {
  credentials_secret_arn: string;
  database_name: string;
  resource_arn: string;
  table_name: string;
  field_mapping: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfigurationFieldMapping;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfiguration {
  credentials_secret_arn: string;
  endpoint: string;
  vector_index_name: string;
  field_mapping: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping;
}
export interface AwsBedrockagentKnowledgeBaseArgsStorageConfiguration {
  type: string;
  opensearch_serverless_configuration: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationOpensearchServerlessConfiguration;
  pinecone_configuration: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationPineconeConfiguration;
  rds_configuration: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRdsConfiguration;
  redis_enterprise_cloud_configuration: AwsBedrockagentKnowledgeBaseArgsStorageConfigurationRedisEnterpriseCloudConfiguration;
}
export interface AwsBedrockagentKnowledgeBaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBedrockagentKnowledgeBaseArgs {
  description?: string;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  knowledge_base_configuration: AwsBedrockagentKnowledgeBaseArgsKnowledgeBaseConfiguration;
  storage_configuration: AwsBedrockagentKnowledgeBaseArgsStorageConfiguration;
  timeouts?: AwsBedrockagentKnowledgeBaseArgsTimeouts;
}
export class aws_bedrockagent_knowledge_base extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly failure_reasons!: string[];
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentKnowledgeBaseArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_knowledge_base");
  }
}