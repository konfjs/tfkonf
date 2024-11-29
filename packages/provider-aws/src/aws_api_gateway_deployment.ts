import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayDeploymentArgsCanarySettings {
  percent_traffic?: number;
  stage_variable_overrides?: {
    [key: string]: string;
  };
  use_stage_cache?: boolean;
}
export interface AwsApiGatewayDeploymentArgs {
  description?: string;
  rest_api_id: string;
  stage_description?: string;
  stage_name?: string;
  triggers?: {
    [key: string]: string;
  };
  variables?: {
    [key: string]: string;
  };
  canary_settings: AwsApiGatewayDeploymentArgsCanarySettings;
}
export class aws_api_gateway_deployment extends TerraformResource {
  readonly created_date!: string;
  readonly execution_arn!: string;
  readonly id?: string;
  readonly invoke_url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayDeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_deployment");
  }
}