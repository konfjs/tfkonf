import { TerraformConfig, TerraformResource } from "tfs";
export interface Cors {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  expose_headers?: string[];
  max_age?: number;
}
export interface Timeouts {
  create?: string;
}
export interface AwsLambdaFunctionUrlArgs {
  authorization_type: string;
  function_name: string;
  invoke_mode?: string;
  qualifier?: string;
  cors: Cors;
  timeouts: Timeouts;
}
export class aws_lambda_function_url extends TerraformResource {
  readonly function_arn!: string;
  readonly function_url!: string;
  readonly id?: string;
  readonly url_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaFunctionUrlArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_function_url");
  }
}