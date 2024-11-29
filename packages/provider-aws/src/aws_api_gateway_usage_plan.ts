import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApiGatewayUsagePlanArgsApiStagesthrottle {
  burst_limit?: number;
  path: string;
  rate_limit?: number;
}
export interface AwsApiGatewayUsagePlanArgsApiStages {
  api_id: string;
  stage: string;
  throttle: AwsApiGatewayUsagePlanArgsApiStagesthrottle;
}
export interface AwsApiGatewayUsagePlanArgsQuotaSettings {
  limit: number;
  offset?: number;
  period: string;
}
export interface AwsApiGatewayUsagePlanArgsThrottleSettings {
  burst_limit?: number;
  rate_limit?: number;
}
export interface AwsApiGatewayUsagePlanArgs {
  description?: string;
  name: string;
  product_code?: string;
  tags?: {
    [key: string]: string;
  };
  api_stages: AwsApiGatewayUsagePlanArgsApiStages;
  quota_settings: AwsApiGatewayUsagePlanArgsQuotaSettings;
  throttle_settings: AwsApiGatewayUsagePlanArgsThrottleSettings;
}
export class aws_api_gateway_usage_plan extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayUsagePlanArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_usage_plan");
  }
}