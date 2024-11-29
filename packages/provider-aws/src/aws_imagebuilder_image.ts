import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsImagebuilderImageArgsImageScanningConfigurationEcrConfiguration {
  container_tags?: string[];
  repository_name?: string;
}
export interface AwsImagebuilderImageArgsImageScanningConfiguration {
  image_scanning_enabled?: boolean;
  ecr_configuration: AwsImagebuilderImageArgsImageScanningConfigurationEcrConfiguration;
}
export interface AwsImagebuilderImageArgsImageTestsConfiguration {
  image_tests_enabled?: boolean;
  timeout_minutes?: number;
}
export interface AwsImagebuilderImageArgsTimeouts {
  create?: string;
}
export interface AwsImagebuilderImageArgsWorkflowParameter {
  name: string;
  value: string;
}
export interface AwsImagebuilderImageArgsWorkflow {
  on_failure?: string;
  parallel_group?: string;
  workflow_arn: string;
  parameter: AwsImagebuilderImageArgsWorkflowParameter;
}
export interface AwsImagebuilderImageArgs {
  container_recipe_arn?: string;
  distribution_configuration_arn?: string;
  enhanced_image_metadata_enabled?: boolean;
  image_recipe_arn?: string;
  infrastructure_configuration_arn: string;
  tags?: {
    [key: string]: string;
  };
  image_scanning_configuration: AwsImagebuilderImageArgsImageScanningConfiguration;
  image_tests_configuration: AwsImagebuilderImageArgsImageTestsConfiguration;
  timeouts: AwsImagebuilderImageArgsTimeouts;
  workflow: AwsImagebuilderImageArgsWorkflow;
}
export class aws_imagebuilder_image extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly execution_role?: string;
  readonly id?: string;
  readonly name!: string;
  readonly os_version!: string;
  readonly output_resources!: any[];
  readonly platform!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderImageArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_image");
  }
}