import { TerraformConfig, TerraformResource } from "tfs";
export interface EcrConfiguration {
  container_tags?: string[];
  repository_name?: string;
}
export interface ImageScanningConfiguration {
  image_scanning_enabled?: boolean;
  ecr_configuration: EcrConfiguration;
}
export interface ImageTestsConfiguration {
  image_tests_enabled?: boolean;
  timeout_minutes?: number;
}
export interface Schedule {
  pipeline_execution_start_condition?: string;
  schedule_expression: string;
}
export interface Parameter {
  name: string;
  value: string;
}
export interface Workflow {
  on_failure?: string;
  parallel_group?: string;
  workflow_arn: string;
  parameter: Parameter;
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
  image_scanning_configuration: ImageScanningConfiguration;
  image_tests_configuration: ImageTestsConfiguration;
  schedule: Schedule;
  workflow: Workflow;
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