import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayStageArgsAccessLogSettings {
  destination_arn: string;
  format: string;
}
export interface AwsApiGatewayStageArgsCanarySettings {
  deployment_id: string;
  percent_traffic?: number;
  stage_variable_overrides?: {
    [key: string]: string;
  };
  use_stage_cache?: boolean;
}
export interface AwsApiGatewayStageArgs {
  cache_cluster_enabled?: boolean;
  cache_cluster_size?: string;
  client_certificate_id?: string;
  deployment_id: string;
  description?: string;
  documentation_version?: string;
  rest_api_id: string;
  stage_name: string;
  tags?: {
    [key: string]: string;
  };
  variables?: {
    [key: string]: string;
  };
  xray_tracing_enabled?: boolean;
  access_log_settings: AwsApiGatewayStageArgsAccessLogSettings;
  canary_settings: AwsApiGatewayStageArgsCanarySettings;
}
export class aws_api_gateway_stage extends TerraformResource {
  readonly arn!: string;
  readonly execution_arn!: string;
  readonly id?: string;
  readonly invoke_url!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly web_acl_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayStageArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_stage");
  }
}