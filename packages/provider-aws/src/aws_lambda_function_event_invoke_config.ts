import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnFailure {
  destination: string;
}

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnSuccess {
  destination: string;
}

export interface AwsLambdaFunctionEventInvokeConfigArgsDestinationConfig {
  on_failure: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnFailure;
  on_success: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfigOnSuccess;
}

export interface AwsLambdaFunctionEventInvokeConfigArgs {
  function_name: string;
  maximum_event_age_in_seconds?: number;
  maximum_retry_attempts?: number;
  qualifier?: string;
  destination_config: AwsLambdaFunctionEventInvokeConfigArgsDestinationConfig;
}

export class aws_lambda_function_event_invoke_config extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaFunctionEventInvokeConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_function_event_invoke_config");
  }
}
