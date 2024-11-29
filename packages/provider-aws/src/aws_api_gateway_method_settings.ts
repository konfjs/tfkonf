import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApiGatewayMethodSettingsArgssettings {
  throttling_burst_limit?: number;
  throttling_rate_limit?: number;
}
export interface AwsApiGatewayMethodSettingsArgs {
  method_path: string;
  rest_api_id: string;
  stage_name: string;
  settings: AwsApiGatewayMethodSettingsArgssettings;
}
export class aws_api_gateway_method_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayMethodSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_method_settings");
  }
}