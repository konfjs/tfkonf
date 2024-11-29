import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApiGatewayMethodArgs {
  api_key_required?: boolean;
  authorization: string;
  authorization_scopes?: string[];
  authorizer_id?: string;
  http_method: string;
  operation_name?: string;
  request_models?: {
    [key: string]: string;
  };
  request_parameters?: {
    [key: string]: any;
  };
  request_validator_id?: string;
  resource_id: string;
  rest_api_id: string;
}
export class aws_api_gateway_method extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayMethodArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_method");
  }
}