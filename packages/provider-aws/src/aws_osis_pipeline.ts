import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOsisPipelineArgsBufferOptions {
  persistent_buffer_enabled: boolean;
}
export interface AwsOsisPipelineArgsEncryptionAtRestOptions {
  kms_key_arn: string;
}
export interface AwsOsisPipelineArgsLogPublishingOptionsCloudwatchLogDestination {
  log_group: string;
}
export interface AwsOsisPipelineArgsLogPublishingOptions {
  is_logging_enabled?: boolean;
  cloudwatch_log_destination: AwsOsisPipelineArgsLogPublishingOptionsCloudwatchLogDestination;
}
export interface AwsOsisPipelineArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOsisPipelineArgsVpcOptions {
  security_group_ids?: string[];
  subnet_ids: string[];
}
export interface AwsOsisPipelineArgs {
  max_units: number;
  min_units: number;
  pipeline_configuration_body: string;
  pipeline_name: string;
  tags?: {
    [key: string]: string;
  };
  buffer_options: AwsOsisPipelineArgsBufferOptions;
  encryption_at_rest_options: AwsOsisPipelineArgsEncryptionAtRestOptions;
  log_publishing_options: AwsOsisPipelineArgsLogPublishingOptions;
  timeouts: AwsOsisPipelineArgstimeouts;
  vpc_options: AwsOsisPipelineArgsVpcOptions;
}
export class aws_osis_pipeline extends TerraformResource {
  readonly id!: string;
  readonly ingest_endpoint_urls!: string[];
  readonly pipeline_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOsisPipelineArgs) {
    super(config, "resource", args, resourceName, "aws_osis_pipeline");
  }
}