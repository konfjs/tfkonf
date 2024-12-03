import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayAuthorizerArgs {
  authorizer_credentials?: string;
  authorizer_result_ttl_in_seconds?: number;
  authorizer_uri?: string;
  identity_source?: string;
  identity_validation_expression?: string;
  name: string;
  provider_arns?: string[];
  rest_api_id: string;
  type?: string;
}
export class aws_api_gateway_authorizer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayAuthorizerArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_authorizer");
  }
}