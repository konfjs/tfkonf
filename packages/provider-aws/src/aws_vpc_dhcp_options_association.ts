import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcDhcpOptionsAssociationArgs {
  dhcp_options_id: string;
  vpc_id: string;
}
export class aws_vpc_dhcp_options_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcDhcpOptionsAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_dhcp_options_association");
  }
}