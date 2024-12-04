import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerPipelineArgsParallelismConfiguration {
  max_parallel_execution_steps: number;
}

export interface AwsSagemakerPipelineArgsPipelineDefinitionS3Location {
  bucket: string;
  object_key: string;
  version_id?: string;
}

export interface AwsSagemakerPipelineArgs {
  pipeline_definition?: string;
  pipeline_description?: string;
  pipeline_display_name: string;
  pipeline_name: string;
  role_arn?: string;
  tags?: { [key: string]: string };
  parallelism_configuration: AwsSagemakerPipelineArgsParallelismConfiguration;
  pipeline_definition_s3_location: AwsSagemakerPipelineArgsPipelineDefinitionS3Location;
}

export class aws_sagemaker_pipeline extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerPipelineArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_pipeline");
  }
}
