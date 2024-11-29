import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsImagebuilderImagePipelineArgsImageScanningConfigurationEcrConfiguration {
  container_tags?: string[];
  repository_name?: string;
}
export interface AwsImagebuilderImagePipelineArgsImageScanningConfiguration {
  image_scanning_enabled?: boolean;
  ecr_configuration: AwsImagebuilderImagePipelineArgsImageScanningConfigurationEcrConfiguration;
}
export interface AwsImagebuilderImagePipelineArgsImageTestsConfiguration {
  image_tests_enabled?: boolean;
  timeout_minutes?: number;
}
export interface AwsImagebuilderImagePipelineArgsSchedule {
  pipeline_execution_start_condition?: string;
  schedule_expression: string;
}
export interface AwsImagebuilderImagePipelineArgsWorkflowParameter {
  name: string;
  value: string;
}
export interface AwsImagebuilderImagePipelineArgsWorkflow {
  on_failure?: string;
  parallel_group?: string;
  workflow_arn: string;
  parameter: AwsImagebuilderImagePipelineArgsWorkflowParameter;
}
export interface AwsImagebuilderImagePipelineArgs {
  container_recipe_arn?: string;
  description?: string;
  distribution_configuration_arn?: string;
  enhanced_image_metadata_enabled?: boolean;
  execution_role?: string;
  image_recipe_arn?: string;
  infrastructure_configuration_arn: string;
  name: string;
  status?: string;
  tags?: {
    [key: string]: string;
  };
  image_scanning_configuration: AwsImagebuilderImagePipelineArgsImageScanningConfiguration;
  image_tests_configuration: AwsImagebuilderImagePipelineArgsImageTestsConfiguration;
  schedule: AwsImagebuilderImagePipelineArgsSchedule;
  workflow: AwsImagebuilderImagePipelineArgsWorkflow;
}
export class aws_imagebuilder_image_pipeline extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly date_last_run!: string;
  readonly date_next_run!: string;
  readonly date_updated!: string;
  readonly id?: string;
  readonly platform!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderImagePipelineArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_image_pipeline");
  }
}