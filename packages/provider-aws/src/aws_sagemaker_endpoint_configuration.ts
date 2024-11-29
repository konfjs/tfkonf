import { TerraformConfig, TerraformResource } from "tfs";
export interface ClientConfig {
  max_concurrent_invocations_per_instance?: number;
}
export interface NotificationConfig {
  error_topic?: string;
  include_inference_response_in?: string[];
  success_topic?: string;
}
export interface OutputConfig {
  kms_key_id?: string;
  s3_failure_path?: string;
  s3_output_path: string;
  notification_config: NotificationConfig;
}
export interface AsyncInferenceConfig {
  client_config: ClientConfig;
  output_config: OutputConfig;
}
export interface CaptureContentTypeHeader {
  csv_content_types?: string[];
  json_content_types?: string[];
}
export interface CaptureOptions {
  capture_mode: string;
}
export interface DataCaptureConfig {
  destination_s3_uri: string;
  enable_capture?: boolean;
  initial_sampling_percentage: number;
  kms_key_id?: string;
  capture_content_type_header: CaptureContentTypeHeader;
  capture_options: CaptureOptions;
}
export interface CoreDumpConfig {
  destination_s3_uri: string;
  kms_key_id?: string;
}
export interface ManagedInstanceScaling {
  max_instance_count?: number;
  min_instance_count?: number;
  status?: string;
}
export interface RoutingConfig {
  routing_strategy: string;
}
export interface ServerlessConfig {
  max_concurrency: number;
  memory_size_in_mb: number;
  provisioned_concurrency?: number;
}
export interface ProductionVariants {
  accelerator_type?: string;
  container_startup_health_check_timeout_in_seconds?: number;
  enable_ssm_access?: boolean;
  inference_ami_version?: string;
  initial_instance_count?: number;
  initial_variant_weight?: number;
  instance_type?: string;
  model_data_download_timeout_in_seconds?: number;
  model_name: string;
  core_dump_config: CoreDumpConfig;
  managed_instance_scaling: ManagedInstanceScaling;
  routing_config: RoutingConfig;
  serverless_config: ServerlessConfig;
}
export interface CoreDumpConfig {
  destination_s3_uri: string;
  kms_key_id: string;
}
export interface ManagedInstanceScaling {
  max_instance_count?: number;
  min_instance_count?: number;
  status?: string;
}
export interface RoutingConfig {
  routing_strategy: string;
}
export interface ServerlessConfig {
  max_concurrency: number;
  memory_size_in_mb: number;
  provisioned_concurrency?: number;
}
export interface ShadowProductionVariants {
  accelerator_type?: string;
  container_startup_health_check_timeout_in_seconds?: number;
  enable_ssm_access?: boolean;
  inference_ami_version?: string;
  initial_instance_count?: number;
  initial_variant_weight?: number;
  instance_type?: string;
  model_data_download_timeout_in_seconds?: number;
  model_name: string;
  volume_size_in_gb?: number;
  core_dump_config: CoreDumpConfig;
  managed_instance_scaling: ManagedInstanceScaling;
  routing_config: RoutingConfig;
  serverless_config: ServerlessConfig;
}
export interface AwsSagemakerEndpointConfigurationArgs {
  kms_key_arn?: string;
  tags?: {
    [key: string]: string;
  };
  async_inference_config: AsyncInferenceConfig;
  data_capture_config: DataCaptureConfig;
  production_variants: ProductionVariants;
  shadow_production_variants: ShadowProductionVariants;
}
export class aws_sagemaker_endpoint_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerEndpointConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_endpoint_configuration");
  }
}