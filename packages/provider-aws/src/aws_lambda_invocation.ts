import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLambdaInvocationArgs {
  function_name: string;
  input: string;
  lifecycle_scope?: string;
  qualifier?: string;
  terraform_key?: string;
  triggers?: {
    [key: string]: string;
  };
}
export class aws_lambda_invocation extends TerraformResource {
  readonly id?: string;
  readonly result!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaInvocationArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_invocation");
  }
}