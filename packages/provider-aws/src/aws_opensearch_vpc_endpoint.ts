import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcOptions {
  subnet_ids: string[];
}
export interface AwsOpensearchVpcEndpointArgs {
  domain_arn: string;
  timeouts: Timeouts;
  vpc_options: VpcOptions;
}
export class aws_opensearch_vpc_endpoint extends TerraformResource {
  readonly endpoint!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_vpc_endpoint");
  }
}