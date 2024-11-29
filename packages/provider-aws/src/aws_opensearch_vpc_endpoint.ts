import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOpensearchVpcEndpointArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOpensearchVpcEndpointArgsVpcOptions {
  subnet_ids: string[];
}
export interface AwsOpensearchVpcEndpointArgs {
  domain_arn: string;
  timeouts: AwsOpensearchVpcEndpointArgstimeouts;
  vpc_options: AwsOpensearchVpcEndpointArgsVpcOptions;
}
export class aws_opensearch_vpc_endpoint extends TerraformResource {
  readonly endpoint!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_vpc_endpoint");
  }
}