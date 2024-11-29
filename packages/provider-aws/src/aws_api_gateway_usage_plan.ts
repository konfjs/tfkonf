import { TerraformConfig, TerraformResource } from "tfs";
export interface Throttle {
  burst_limit?: number;
  path: string;
  rate_limit?: number;
}
export interface ApiStages {
  api_id: string;
  stage: string;
  throttle: Throttle;
}
export interface QuotaSettings {
  limit: number;
  offset?: number;
  period: string;
}
export interface ThrottleSettings {
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
  api_stages: ApiStages;
  quota_settings: QuotaSettings;
  throttle_settings: ThrottleSettings;
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