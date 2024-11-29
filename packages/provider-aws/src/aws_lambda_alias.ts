import { TerraformConfig, TerraformResource } from "tfs";
export interface RoutingConfig {
  additional_version_weights?: {
    [key: string]: number;
  };
}
export interface AwsLambdaAliasArgs {
  description?: string;
  function_name: string;
  function_version: string;
  name: string;
  routing_config: RoutingConfig;
}
export class aws_lambda_alias extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly invoke_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaAliasArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_alias");
  }
}