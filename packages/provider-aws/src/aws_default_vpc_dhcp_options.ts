import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDefaultVpcDhcpOptionsArgs {
  tags?: {
    [key: string]: string;
  };
}
export class aws_default_vpc_dhcp_options extends TerraformResource {
  readonly arn!: string;
  readonly domain_name!: string;
  readonly domain_name_servers!: string;
  readonly id?: string;
  readonly ipv6_address_preferred_lease_time!: string;
  readonly netbios_name_servers!: string;
  readonly netbios_node_type!: string;
  readonly ntp_servers!: string;
  readonly owner_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultVpcDhcpOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_default_vpc_dhcp_options");
  }
}