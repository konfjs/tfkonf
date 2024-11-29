import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLambdaFunctionRecursionConfigArgs {
  function_name: string;
  recursive_loop: string;
}
export class aws_lambda_function_recursion_config extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaFunctionRecursionConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_function_recursion_config");
  }
}