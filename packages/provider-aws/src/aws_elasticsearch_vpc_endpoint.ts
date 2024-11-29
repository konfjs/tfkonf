import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticsearchVpcEndpointArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsElasticsearchVpcEndpointArgsVpcOptions {
  subnet_ids: string[];
}
export interface AwsElasticsearchVpcEndpointArgs {
  domain_arn: string;
  timeouts: AwsElasticsearchVpcEndpointArgstimeouts;
  vpc_options: AwsElasticsearchVpcEndpointArgsVpcOptions;
}
export class aws_elasticsearch_vpc_endpoint extends TerraformResource {
  readonly endpoint!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticsearchVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_elasticsearch_vpc_endpoint");
  }
}