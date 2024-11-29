import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayGatewayResponseArgs {
  response_parameters?: {
    [key: string]: string;
  };
  response_templates?: {
    [key: string]: string;
  };
  response_type: string;
  rest_api_id: string;
  status_code?: string;
}
export class aws_api_gateway_gateway_response extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayGatewayResponseArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_gateway_response");
  }
}