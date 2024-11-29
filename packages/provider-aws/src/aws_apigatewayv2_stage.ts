import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessLogSettings {
  destination_arn: string;
  format: string;
}
export interface DefaultRouteSettings {
  data_trace_enabled?: boolean;
  detailed_metrics_enabled?: boolean;
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}
export interface RouteSettings {
  data_trace_enabled?: boolean;
  detailed_metrics_enabled?: boolean;
  route_key: string;
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}
export interface AwsApigatewayv2StageArgs {
  api_id: string;
  auto_deploy?: boolean;
  client_certificate_id?: string;
  description?: string;
  name: string;
  stage_variables?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  access_log_settings: AccessLogSettings;
  default_route_settings: DefaultRouteSettings;
  route_settings: RouteSettings;
}
export class aws_apigatewayv2_stage extends TerraformResource {
  readonly arn!: string;
  readonly deployment_id?: string;
  readonly execution_arn!: string;
  readonly id?: string;
  readonly invoke_url!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2StageArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_stage");
  }
}