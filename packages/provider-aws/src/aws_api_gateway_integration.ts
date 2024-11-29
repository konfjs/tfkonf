import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayIntegrationArgsTlsConfig {
  insecure_skip_verification?: boolean;
}
export interface AwsApiGatewayIntegrationArgs {
  cache_key_parameters?: string[];
  connection_id?: string;
  connection_type?: string;
  content_handling?: string;
  credentials?: string;
  http_method: string;
  integration_http_method?: string;
  request_parameters?: {
    [key: string]: string;
  };
  request_templates?: {
    [key: string]: string;
  };
  resource_id: string;
  rest_api_id: string;
  timeout_milliseconds?: number;
  type: string;
  uri?: string;
  tls_config: AwsApiGatewayIntegrationArgsTlsConfig;
}
export class aws_api_gateway_integration extends TerraformResource {
  readonly cache_namespace?: string;
  readonly id?: string;
  readonly passthrough_behavior?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_integration");
  }
}