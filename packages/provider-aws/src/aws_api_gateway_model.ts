import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApiGatewayModelArgs {
  content_type: string;
  description?: string;
  name: string;
  rest_api_id: string;
  schema?: string;
}
export class aws_api_gateway_model extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayModelArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_model");
  }
}