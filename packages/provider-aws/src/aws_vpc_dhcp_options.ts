import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcDhcpOptionsArgs {
  domain_name?: string;
  domain_name_servers?: string[];
  ipv6_address_preferred_lease_time?: string;
  netbios_name_servers?: string[];
  netbios_node_type?: string;
  ntp_servers?: string[];
  tags?: { [key: string]: string };
}

export class aws_vpc_dhcp_options extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcDhcpOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_dhcp_options");
  }
}
