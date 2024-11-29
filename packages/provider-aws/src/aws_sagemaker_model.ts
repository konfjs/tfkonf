import { TerraformConfig, TerraformResource } from "tfs";
export interface RepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}
export interface ImageConfig {
  repository_access_mode: string;
  repository_auth_config: RepositoryAuthConfig;
}
export interface ModelAccessConfig {
  accept_eula: boolean;
}
export interface S3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config: ModelAccessConfig;
}
export interface ModelDataSource {
  s3_data_source: S3DataSource;
}
export interface MultiModelConfig {
  model_cache_setting?: string;
}
export interface Container {
  container_hostname?: string;
  environment?: {
    [key: string]: string;
  };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config: ImageConfig;
  model_data_source: ModelDataSource;
  multi_model_config: MultiModelConfig;
}
export interface InferenceExecutionConfig {
  mode: string;
}
export interface RepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}
export interface ImageConfig {
  repository_access_mode: string;
  repository_auth_config: RepositoryAuthConfig;
}
export interface ModelAccessConfig {
  accept_eula: boolean;
}
export interface S3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config: ModelAccessConfig;
}
export interface ModelDataSource {
  s3_data_source: S3DataSource;
}
export interface MultiModelConfig {
  model_cache_setting?: string;
}
export interface PrimaryContainer {
  container_hostname?: string;
  environment?: {
    [key: string]: string;
  };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config: ImageConfig;
  model_data_source: ModelDataSource;
  multi_model_config: MultiModelConfig;
}
export interface VpcConfig {
  security_group_ids: string[];
  subnets: string[];
}
export interface AwsSagemakerModelArgs {
  enable_network_isolation?: boolean;
  execution_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  container: Container;
  inference_execution_config: InferenceExecutionConfig;
  primary_container: PrimaryContainer;
  vpc_config: VpcConfig;
}
export class aws_sagemaker_model extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerModelArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_model");
  }
}