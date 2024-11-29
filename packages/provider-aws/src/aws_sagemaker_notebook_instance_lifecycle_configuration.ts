import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerNotebookInstanceLifecycleConfigurationArgs {
  name?: string;
  on_create?: string;
  on_start?: string;
}
export class aws_sagemaker_notebook_instance_lifecycle_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerNotebookInstanceLifecycleConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_notebook_instance_lifecycle_configuration");
  }
}