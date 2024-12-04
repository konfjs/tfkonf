import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayVpcLinkArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  target_arns: string[];
}

export class aws_api_gateway_vpc_link extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayVpcLinkArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_vpc_link");
  }
}
