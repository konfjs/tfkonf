import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerModelPackageGroupPolicyArgs {
  model_package_group_name: string;
  resource_policy: string;
}
export class aws_sagemaker_model_package_group_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerModelPackageGroupPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_model_package_group_policy");
  }
}