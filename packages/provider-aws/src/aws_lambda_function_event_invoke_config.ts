import { TerraformConfig, TerraformResource } from "tfs";
export interface OnFailure {
  destination: string;
}
export interface OnSuccess {
  destination: string;
}
export interface DestinationConfig {
  on_failure: OnFailure;
  on_success: OnSuccess;
}
export interface AwsLambdaFunctionEventInvokeConfigArgs {
  function_name: string;
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
  qualifier?: string;
  destination_config: DestinationConfig;
}
export class aws_lambda_function_event_invoke_config extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaFunctionEventInvokeConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_function_event_invoke_config");
  }
}