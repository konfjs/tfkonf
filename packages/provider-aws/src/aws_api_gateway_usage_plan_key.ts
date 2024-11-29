import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayUsagePlanKeyArgs {
  key_id: string;
  key_type: string;
  usage_plan_id: string;
}
export class aws_api_gateway_usage_plan_key extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly value!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayUsagePlanKeyArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_usage_plan_key");
  }
}