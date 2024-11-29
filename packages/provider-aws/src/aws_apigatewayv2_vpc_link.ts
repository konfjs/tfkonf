import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsApigatewayv2VpcLinkArgs {
  name: string;
  security_group_ids: string[];
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_apigatewayv2_vpc_link extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2VpcLinkArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_vpc_link");
  }
}