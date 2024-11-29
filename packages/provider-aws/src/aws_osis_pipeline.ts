import { TerraformConfig, TerraformResource } from "tfs";
export interface BufferOptions {
  persistent_buffer_enabled: boolean;
}
export interface EncryptionAtRestOptions {
  kms_key_arn: string;
}
export interface CloudwatchLogDestination {
  log_group: string;
}
export interface LogPublishingOptions {
  is_logging_enabled?: boolean;
  cloudwatch_log_destination: CloudwatchLogDestination;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcOptions {
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
  buffer_options: BufferOptions;
  encryption_at_rest_options: EncryptionAtRestOptions;
  log_publishing_options: LogPublishingOptions;
  timeouts: Timeouts;
  vpc_options: VpcOptions;
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