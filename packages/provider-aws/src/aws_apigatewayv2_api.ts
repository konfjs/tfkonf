import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApigatewayv2ApiArgsCorsConfiguration {
  allow_credentials?: boolean;
  allow_headers?: string[];
  allow_methods?: string[];
  allow_origins?: string[];
  expose_headers?: string[];
  max_age?: number;
}
export interface AwsApigatewayv2ApiArgs {
  api_key_selection_expression?: string;
  body?: string;
  credentials_arn?: string;
  description?: string;
  disable_execute_api_endpoint?: boolean;
  fail_on_warnings?: boolean;
  name: string;
  protocol_type: string;
  route_key?: string;
  route_selection_expression?: string;
  tags?: {
    [key: string]: string;
  };
  target?: string;
  version?: string;
  cors_configuration: AwsApigatewayv2ApiArgsCorsConfiguration;
}
export class aws_apigatewayv2_api extends TerraformResource {
  readonly api_endpoint!: string;
  readonly arn!: string;
  readonly execution_arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2ApiArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_api");
  }
}