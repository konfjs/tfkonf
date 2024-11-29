import { TerraformConfig, TerraformResource } from "tfs";
export interface JwtConfiguration {
  audience?: string[];
  issuer?: string;
}
export interface Timeouts {
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
  jwt_configuration: JwtConfiguration;
  timeouts: Timeouts;
}
export class aws_apigatewayv2_authorizer extends TerraformResource {
  readonly authorizer_result_ttl_in_seconds?: number;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2AuthorizerArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_authorizer");
  }
}