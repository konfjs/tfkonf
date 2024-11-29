import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApigatewayv2RouteResponseArgs {
  api_id: string;
  model_selection_expression?: string;
  response_models?: {
    [key: string]: string;
  };
  route_id: string;
  route_response_key: string;
}
export class aws_apigatewayv2_route_response extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2RouteResponseArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_route_response");
  }
}