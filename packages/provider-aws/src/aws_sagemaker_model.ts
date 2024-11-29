import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerModelArgscontainerImageConfigRepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}
export interface AwsSagemakerModelArgscontainerImageConfig {
  repository_access_mode: string;
  repository_auth_config: AwsSagemakerModelArgscontainerImageConfigRepositoryAuthConfig;
}
export interface AwsSagemakerModelArgscontainerModelDataSourceS3DataSourceModelAccessConfig {
  accept_eula: boolean;
}
export interface AwsSagemakerModelArgscontainerModelDataSourceS3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config: AwsSagemakerModelArgscontainerModelDataSourceS3DataSourceModelAccessConfig;
}
export interface AwsSagemakerModelArgscontainerModelDataSource {
  s3_data_source: AwsSagemakerModelArgscontainerModelDataSourceS3DataSource;
}
export interface AwsSagemakerModelArgscontainerMultiModelConfig {
  model_cache_setting?: string;
}
export interface AwsSagemakerModelArgscontainer {
  container_hostname?: string;
  environment?: {
    [key: string]: string;
  };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config: AwsSagemakerModelArgscontainerImageConfig;
  model_data_source: AwsSagemakerModelArgscontainerModelDataSource;
  multi_model_config: AwsSagemakerModelArgscontainerMultiModelConfig;
}
export interface AwsSagemakerModelArgsInferenceExecutionConfig {
  mode: string;
}
export interface AwsSagemakerModelArgsPrimaryContainerImageConfigRepositoryAuthConfig {
  repository_credentials_provider_arn: string;
}
export interface AwsSagemakerModelArgsPrimaryContainerImageConfig {
  repository_access_mode: string;
  repository_auth_config: AwsSagemakerModelArgsPrimaryContainerImageConfigRepositoryAuthConfig;
}
export interface AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
  accept_eula: boolean;
}
export interface AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSource {
  compression_type: string;
  s3_data_type: string;
  s3_uri: string;
  model_access_config: AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig;
}
export interface AwsSagemakerModelArgsPrimaryContainerModelDataSource {
  s3_data_source: AwsSagemakerModelArgsPrimaryContainerModelDataSourceS3DataSource;
}
export interface AwsSagemakerModelArgsPrimaryContainerMultiModelConfig {
  model_cache_setting?: string;
}
export interface AwsSagemakerModelArgsPrimaryContainer {
  container_hostname?: string;
  environment?: {
    [key: string]: string;
  };
  image?: string;
  inference_specification_name?: string;
  mode?: string;
  model_data_url?: string;
  model_package_name?: string;
  image_config: AwsSagemakerModelArgsPrimaryContainerImageConfig;
  model_data_source: AwsSagemakerModelArgsPrimaryContainerModelDataSource;
  multi_model_config: AwsSagemakerModelArgsPrimaryContainerMultiModelConfig;
}
export interface AwsSagemakerModelArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}
export interface AwsSagemakerModelArgs {
  enable_network_isolation?: boolean;
  execution_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  container: AwsSagemakerModelArgscontainer;
  inference_execution_config: AwsSagemakerModelArgsInferenceExecutionConfig;
  primary_container: AwsSagemakerModelArgsPrimaryContainer;
  vpc_config: AwsSagemakerModelArgsVpcConfig;
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