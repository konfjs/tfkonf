import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApigatewayv2IntegrationResponseArgs {
  api_id: string;
  content_handling_strategy?: string;
  integration_id: string;
  integration_response_key: string;
  response_templates?: { [key: string]: string };
  template_selection_expression?: string;
}

export class aws_apigatewayv2_integration_response extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2IntegrationResponseArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_integration_response");
  }
}
