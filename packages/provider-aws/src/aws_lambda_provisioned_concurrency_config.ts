import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaProvisionedConcurrencyConfigArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsLambdaProvisionedConcurrencyConfigArgs {
  function_name: string;
  provisioned_concurrent_executions: number;
  qualifier: string;
  skip_destroy?: boolean;
  timeouts?: AwsLambdaProvisionedConcurrencyConfigArgsTimeouts;
}

export class aws_lambda_provisioned_concurrency_config extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaProvisionedConcurrencyConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_provisioned_concurrency_config");
  }
}
