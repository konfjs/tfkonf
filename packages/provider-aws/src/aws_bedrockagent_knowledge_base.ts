import { TerraformConfig, TerraformResource } from "tfs";
export interface VectorKnowledgeBaseConfiguration {
  embedding_model_arn: string;
}
export interface KnowledgeBaseConfiguration {
  type: string;
  vector_knowledge_base_configuration: VectorKnowledgeBaseConfiguration;
}
export interface FieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}
export interface OpensearchServerlessConfiguration {
  collection_arn: string;
  vector_index_name: string;
  field_mapping: FieldMapping;
}
export interface FieldMapping {
  metadata_field?: string;
  text_field?: string;
}
export interface PineconeConfiguration {
  connection_string: string;
  credentials_secret_arn: string;
  namespace?: string;
  field_mapping: FieldMapping;
}
export interface FieldMapping {
  metadata_field: string;
  primary_key_field: string;
  text_field: string;
  vector_field: string;
}
export interface RdsConfiguration {
  credentials_secret_arn: string;
  database_name: string;
  resource_arn: string;
  table_name: string;
  field_mapping: FieldMapping;
}
export interface FieldMapping {
  metadata_field?: string;
  text_field?: string;
  vector_field?: string;
}
export interface RedisEnterpriseCloudConfiguration {
  credentials_secret_arn: string;
  endpoint: string;
  vector_index_name: string;
  field_mapping: FieldMapping;
}
export interface StorageConfiguration {
  type: string;
  opensearch_serverless_configuration: OpensearchServerlessConfiguration;
  pinecone_configuration: PineconeConfiguration;
  rds_configuration: RdsConfiguration;
  redis_enterprise_cloud_configuration: RedisEnterpriseCloudConfiguration;
}
export interface Timeouts {
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
  knowledge_base_configuration: KnowledgeBaseConfiguration;
  storage_configuration: StorageConfiguration;
  timeouts: Timeouts;
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