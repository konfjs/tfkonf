import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsOpensearchVpcEndpointArgsVpcOptions {
  subnet_ids: string[];
}

export interface AwsOpensearchVpcEndpointArgs {
  domain_arn: string;
  timeouts?: AwsOpensearchVpcEndpointArgsTimeouts;
  vpc_options: AwsOpensearchVpcEndpointArgsVpcOptions;
}

export class aws_opensearch_vpc_endpoint extends TerraformResource {
  readonly endpoint!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_vpc_endpoint");
  }
}
