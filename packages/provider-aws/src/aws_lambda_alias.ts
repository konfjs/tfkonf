import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaAliasArgsRoutingConfig {
  additional_version_weights?: { [key: string]: number };
}

export interface AwsLambdaAliasArgs {
  description?: string;
  function_name: string;
  function_version: string;
  name: string;
  routing_config: AwsLambdaAliasArgsRoutingConfig;
}

export class aws_lambda_alias extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly invoke_arn!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaAliasArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_alias");
  }
}
