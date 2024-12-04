import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayRequestValidatorArgs {
  name: string;
  rest_api_id: string;
  validate_request_body?: boolean;
  validate_request_parameters?: boolean;
}

export class aws_api_gateway_request_validator extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayRequestValidatorArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_request_validator");
  }
}
