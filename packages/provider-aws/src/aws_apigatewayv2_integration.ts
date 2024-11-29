import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApigatewayv2IntegrationArgsResponseParameters {
  mappings: {
    [key: string]: string;
  };
  status_code: string;
}
export interface AwsApigatewayv2IntegrationArgsTlsConfig {
  server_name_to_verify?: string;
}
export interface AwsApigatewayv2IntegrationArgs {
  api_id: string;
  connection_id?: string;
  connection_type?: string;
  content_handling_strategy?: string;
  credentials_arn?: string;
  description?: string;
  integration_method?: string;
  integration_subtype?: string;
  integration_type: string;
  integration_uri?: string;
  passthrough_behavior?: string;
  payload_format_version?: string;
  request_parameters?: {
    [key: string]: string;
  };
  request_templates?: {
    [key: string]: string;
  };
  template_selection_expression?: string;
  response_parameters: AwsApigatewayv2IntegrationArgsResponseParameters;
  tls_config: AwsApigatewayv2IntegrationArgsTlsConfig;
}
export class aws_apigatewayv2_integration extends TerraformResource {
  readonly id?: string;
  readonly integration_response_selection_expression!: string;
  readonly timeout_milliseconds?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2IntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_integration");
  }
}