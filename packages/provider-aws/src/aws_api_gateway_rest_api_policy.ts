import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayRestApiPolicyArgs {
  policy: string;
  rest_api_id: string;
}
export class aws_api_gateway_rest_api_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayRestApiPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_rest_api_policy");
  }
}