import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayIntegrationResponseArgs {
  content_handling?: string;
  http_method: string;
  resource_id: string;
  response_parameters?: {
    [key: string]: string;
  };
  response_templates?: {
    [key: string]: string;
  };
  rest_api_id: string;
  selection_pattern?: string;
  status_code: string;
}
export class aws_api_gateway_integration_response extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayIntegrationResponseArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_integration_response");
  }
}