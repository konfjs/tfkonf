import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayMethodResponseArgs {
  http_method: string;
  resource_id: string;
  response_models?: {
    [key: string]: string;
  };
  response_parameters?: {
    [key: string]: any;
  };
  rest_api_id: string;
  status_code: string;
}
export class aws_api_gateway_method_response extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayMethodResponseArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_method_response");
  }
}