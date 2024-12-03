import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApigatewayv2DeploymentArgs {
  api_id: string;
  description?: string;
  triggers?: {
    [key: string]: string;
  };
}
export class aws_apigatewayv2_deployment extends TerraformResource {
  readonly auto_deployed!: boolean;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2DeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_deployment");
  }
}