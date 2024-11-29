import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsLambdaProvisionedConcurrencyConfigArgs {
  function_name: string;
  provisioned_concurrent_executions: number;
  qualifier: string;
  skip_destroy?: boolean;
  timeouts: Timeouts;
}
export class aws_lambda_provisioned_concurrency_config extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaProvisionedConcurrencyConfigArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_provisioned_concurrency_config");
  }
}