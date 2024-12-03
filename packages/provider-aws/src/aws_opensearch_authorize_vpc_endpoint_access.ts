import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpensearchAuthorizeVpcEndpointAccessArgs {
  account: string;
  domain_name: string;
}
export class aws_opensearch_authorize_vpc_endpoint_access extends TerraformResource {
  readonly authorized_principal!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchAuthorizeVpcEndpointAccessArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_authorize_vpc_endpoint_access");
  }
}