import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Configuration {
  bucket_arn: string;
  bucket_owner_account_id?: string;
  inclusion_prefixes?: string[];
}
export interface DataSourceConfiguration {
  type: string;
  s3_configuration: S3Configuration;
}
export interface ServerSideEncryptionConfiguration {
  kms_key_arn?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface FixedSizeChunkingConfiguration {
  max_tokens: number;
  overlap_percentage: number;
}
export interface LevelConfiguration {
  max_tokens: number;
}
export interface HierarchicalChunkingConfiguration {
  overlap_tokens: number;
  level_configuration: LevelConfiguration;
}
export interface SemanticChunkingConfiguration {
  breakpoint_percentile_threshold: number;
  buffer_size: number;
  max_token: number;
}
export interface ChunkingConfiguration {
  chunking_strategy: string;
  fixed_size_chunking_configuration: FixedSizeChunkingConfiguration;
  hierarchical_chunking_configuration: HierarchicalChunkingConfiguration;
  semantic_chunking_configuration: SemanticChunkingConfiguration;
}
export interface S3Location {
  uri: string;
}
export interface IntermediateStorage {
  s3_location: S3Location;
}
export interface TransformationLambdaConfiguration {
  lambda_arn: string;
}
export interface TransformationFunction {
  transformation_lambda_configuration: TransformationLambdaConfiguration;
}
export interface Transformation {
  step_to_apply: string;
  transformation_function: TransformationFunction;
}
export interface CustomTransformationConfiguration {
  intermediate_storage: IntermediateStorage;
  transformation: Transformation;
}
export interface ParsingPrompt {
  parsing_prompt_string: string;
}
export interface BedrockFoundationModelConfiguration {
  model_arn: string;
  parsing_prompt: ParsingPrompt;
}
export interface ParsingConfiguration {
  parsing_strategy: string;
  bedrock_foundation_model_configuration: BedrockFoundationModelConfiguration;
}
export interface VectorIngestionConfiguration {
  chunking_configuration: ChunkingConfiguration;
  custom_transformation_configuration: CustomTransformationConfiguration;
  parsing_configuration: ParsingConfiguration;
}
export interface AwsBedrockagentDataSourceArgs {
  description?: string;
  knowledge_base_id: string;
  name: string;
  data_source_configuration: DataSourceConfiguration;
  server_side_encryption_configuration: ServerSideEncryptionConfiguration;
  timeouts: Timeouts;
  vector_ingestion_configuration: VectorIngestionConfiguration;
}
export class aws_bedrockagent_data_source extends TerraformResource {
  readonly data_deletion_policy?: string;
  readonly data_source_id!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentDataSourceArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_data_source");
  }
}