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
export interface Timeouts {
  create?: string;
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
export interface AwsImagebuilderImageArgs {
  container_recipe_arn?: string;
  distribution_configuration_arn?: string;
  enhanced_image_metadata_enabled?: boolean;
  image_recipe_arn?: string;
  infrastructure_configuration_arn: string;
  tags?: {
    [key: string]: string;
  };
  image_scanning_configuration: ImageScanningConfiguration;
  image_tests_configuration: ImageTestsConfiguration;
  timeouts: Timeouts;
  workflow: Workflow;
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