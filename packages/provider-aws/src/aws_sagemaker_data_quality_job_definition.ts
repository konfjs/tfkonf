import { TerraformConfig, TerraformResource } from "tfs";
export interface DataQualityAppSpecification {
  environment?: {
    [key: string]: string;
  };
  image_uri: string;
  post_analytics_processor_source_uri?: string;
  record_preprocessor_source_uri?: string;
}
export interface ConstraintsResource {
  s3_uri?: string;
}
export interface StatisticsResource {
  s3_uri?: string;
}
export interface DataQualityBaselineConfig {
  constraints_resource: ConstraintsResource;
  statistics_resource: StatisticsResource;
}
export interface Csv {
  header?: boolean;
}
export interface Json {
  line?: boolean;
}
export interface DatasetFormat {
  csv: Csv;
  json: Json;
}
export interface BatchTransformInput {
  data_captured_destination_s3_uri: string;
  local_path?: string;
  dataset_format: DatasetFormat;
}
export interface EndpointInput {
  endpoint_name: string;
  local_path?: string;
}
export interface DataQualityJobInput {
  batch_transform_input: BatchTransformInput;
  endpoint_input: EndpointInput;
}
export interface S3Output {
  local_path?: string;
  s3_uri: string;
}
export interface MonitoringOutputs {
  s3_output: S3Output;
}
export interface DataQualityJobOutputConfig {
  kms_key_id?: string;
  monitoring_outputs: MonitoringOutputs;
}
export interface ClusterConfig {
  instance_count: number;
  instance_type: string;
  volume_kms_key_id?: string;
  volume_size_in_gb: number;
}
export interface JobResources {
  cluster_config: ClusterConfig;
}
export interface VpcConfig {
  security_group_ids: string[];
  subnets: string[];
}
export interface NetworkConfig {
  enable_inter_container_traffic_encryption?: boolean;
  enable_network_isolation?: boolean;
  vpc_config: VpcConfig;
}
export interface StoppingCondition {}
export interface AwsSagemakerDataQualityJobDefinitionArgs {
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  data_quality_app_specification: DataQualityAppSpecification;
  data_quality_baseline_config: DataQualityBaselineConfig;
  data_quality_job_input: DataQualityJobInput;
  data_quality_job_output_config: DataQualityJobOutputConfig;
  job_resources: JobResources;
  network_config: NetworkConfig;
  stopping_condition: StoppingCondition;
}
export class aws_sagemaker_data_quality_job_definition extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerDataQualityJobDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_data_quality_job_definition");
  }
}