import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityAppSpecification {
  environment?: { [key: string]: string };
  image_uri: string;
  post_analytics_processor_source_uri?: string;
  record_preprocessor_source_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigConstraintsResource {
  s3_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigStatisticsResource {
  s3_uri?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfig {
  constraints_resource: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigConstraintsResource;
  statistics_resource: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfigStatisticsResource;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatCsv {
  header?: boolean;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatJson {
  line?: boolean;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormat {
  csv: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatCsv;
  json: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormatJson;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInput {
  data_captured_destination_s3_uri: string;
  local_path?: string;
  dataset_format: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInputDatasetFormat;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputEndpointInput {
  endpoint_name: string;
  local_path?: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInput {
  batch_transform_input: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputBatchTransformInput;
  endpoint_input: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInputEndpointInput;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputsS3Output {
  local_path?: string;
  s3_uri: string;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputs {
  s3_output: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputsS3Output;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfig {
  kms_key_id?: string;
  monitoring_outputs: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfigMonitoringOutputs;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsJobResourcesClusterConfig {
  instance_count: number;
  instance_type: string;
  volume_kms_key_id?: string;
  volume_size_in_gb: number;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsJobResources {
  cluster_config: AwsSagemakerDataQualityJobDefinitionArgsJobResourcesClusterConfig;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsNetworkConfigVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}

export interface AwsSagemakerDataQualityJobDefinitionArgsNetworkConfig {
  enable_inter_container_traffic_encryption?: boolean;
  enable_network_isolation?: boolean;
  vpc_config: AwsSagemakerDataQualityJobDefinitionArgsNetworkConfigVpcConfig;
}

export interface AwsSagemakerDataQualityJobDefinitionArgsStoppingCondition {
}

export interface AwsSagemakerDataQualityJobDefinitionArgs {
  role_arn: string;
  tags?: { [key: string]: string };
  data_quality_app_specification: AwsSagemakerDataQualityJobDefinitionArgsDataQualityAppSpecification;
  data_quality_baseline_config: AwsSagemakerDataQualityJobDefinitionArgsDataQualityBaselineConfig;
  data_quality_job_input: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobInput;
  data_quality_job_output_config: AwsSagemakerDataQualityJobDefinitionArgsDataQualityJobOutputConfig;
  job_resources: AwsSagemakerDataQualityJobDefinitionArgsJobResources;
  network_config: AwsSagemakerDataQualityJobDefinitionArgsNetworkConfig;
  stopping_condition: AwsSagemakerDataQualityJobDefinitionArgsStoppingCondition;
}

export class aws_sagemaker_data_quality_job_definition extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerDataQualityJobDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_data_quality_job_definition");
  }
}
