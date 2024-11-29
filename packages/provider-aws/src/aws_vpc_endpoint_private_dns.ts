import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcEndpointPrivateDnsArgs {
  private_dns_enabled: boolean;
  vpc_endpoint_id: string;
}
export class aws_vpc_endpoint_private_dns extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointPrivateDnsArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_private_dns");
  }
}