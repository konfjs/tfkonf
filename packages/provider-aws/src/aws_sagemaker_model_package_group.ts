import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerModelPackageGroupArgs {
  model_package_group_description?: string;
  model_package_group_name: string;
  tags?: { [key: string]: string };
}

export class aws_sagemaker_model_package_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerModelPackageGroupArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_model_package_group");
  }
}
