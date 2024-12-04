import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2ModelArgs {
  api_id: string;
  content_type: string;
  description?: string;
  name: string;
  schema: string;
}

export class aws_apigatewayv2_model extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2ModelArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_model");
  }
}
