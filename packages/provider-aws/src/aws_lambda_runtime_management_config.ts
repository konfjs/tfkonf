import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaRuntimeManagementConfigArgs {
  function_name: string;
  qualifier?: string;
  runtime_version_arn?: string;
  update_runtime_on?: string;
}

export class aws_lambda_runtime_management_config extends TerraformResource {
  readonly function_arn!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaRuntimeManagementConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_runtime_management_config");
  }
}
