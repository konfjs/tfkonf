import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchserverlessVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOpensearchserverlessVpcEndpointArgs {
  name: string;
  subnet_ids: string[];
  vpc_id: string;
  timeouts?: AwsOpensearchserverlessVpcEndpointArgsTimeouts;
}
export class aws_opensearchserverless_vpc_endpoint extends TerraformResource {
  readonly id!: string;
  readonly security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_vpc_endpoint");
  }
}