import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2ApiMappingArgs {
  api_id: string;
  api_mapping_key?: string;
  domain_name: string;
  stage: string;
}

export class aws_apigatewayv2_api_mapping extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2ApiMappingArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_api_mapping");
  }
}
