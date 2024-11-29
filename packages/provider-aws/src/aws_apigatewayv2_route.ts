import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApigatewayv2RouteArgsRequestParameter {
  request_parameter_key: string;
  required: boolean;
}
export interface AwsApigatewayv2RouteArgs {
  api_id: string;
  api_key_required?: boolean;
  authorization_scopes?: string[];
  authorization_type?: string;
  authorizer_id?: string;
  model_selection_expression?: string;
  operation_name?: string;
  request_models?: {
    [key: string]: string;
  };
  route_key: string;
  route_response_selection_expression?: string;
  target?: string;
  request_parameter: AwsApigatewayv2RouteArgsRequestParameter;
}
export class aws_apigatewayv2_route extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2RouteArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_route");
  }
}