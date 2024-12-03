import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayDocumentationVersionArgs {
  description?: string;
  rest_api_id: string;
  version: string;
}
export class aws_api_gateway_documentation_version extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayDocumentationVersionArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_documentation_version");
  }
}