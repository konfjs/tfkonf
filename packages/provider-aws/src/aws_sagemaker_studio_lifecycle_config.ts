import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerStudioLifecycleConfigArgs {
  studio_lifecycle_config_app_type: string;
  studio_lifecycle_config_content: string;
  studio_lifecycle_config_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_sagemaker_studio_lifecycle_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerStudioLifecycleConfigArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_studio_lifecycle_config");
  }
}