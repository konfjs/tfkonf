import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayResourceArgs {
  parent_id: string;
  path_part: string;
  rest_api_id: string;
}

export class aws_api_gateway_resource extends TerraformResource {
  readonly id?: string;
  readonly path!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayResourceArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_resource");
  }
}
