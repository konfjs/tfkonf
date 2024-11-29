import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApigatewayv2AuthorizerArgsJwtConfiguration {
  audience?: string[];
  issuer?: string;
}
export interface AwsApigatewayv2AuthorizerArgsTimeouts {
  delete?: string;
}
export interface AwsApigatewayv2AuthorizerArgs {
  api_id: string;
  authorizer_credentials_arn?: string;
  authorizer_payload_format_version?: string;
  authorizer_type: string;
  authorizer_uri?: string;
  enable_simple_responses?: boolean;
  identity_sources?: string[];
  name: string;
  jwt_configuration: AwsApigatewayv2AuthorizerArgsJwtConfiguration;
  timeouts: AwsApigatewayv2AuthorizerArgsTimeouts;
}
export class aws_apigatewayv2_authorizer extends TerraformResource {
  readonly authorizer_result_ttl_in_seconds?: number;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2AuthorizerArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_authorizer");
  }
}