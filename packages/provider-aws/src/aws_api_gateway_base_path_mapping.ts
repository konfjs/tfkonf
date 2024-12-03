import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayBasePathMappingArgs {
  api_id: string;
  base_path?: string;
  domain_name: string;
  stage_name?: string;
}
export class aws_api_gateway_base_path_mapping extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayBasePathMappingArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_base_path_mapping");
  }
}