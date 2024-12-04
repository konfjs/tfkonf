import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcArgs {
  assign_generated_ipv6_cidr_block?: boolean;
  enable_dns_support?: boolean;
  instance_tenancy?: string;
  ipv4_ipam_pool_id?: string;
  ipv4_netmask_length?: number;
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  tags?: { [key: string]: string };
}

export class aws_vpc extends TerraformResource {
  readonly arn!: string;
  readonly cidr_block?: string;
  readonly default_network_acl_id!: string;
  readonly default_route_table_id!: string;
  readonly default_security_group_id!: string;
  readonly dhcp_options_id!: string;
  readonly enable_dns_hostnames?: boolean;
  readonly enable_network_address_usage_metrics?: boolean;
  readonly id?: string;
  readonly ipv6_association_id!: string;
  readonly ipv6_cidr_block?: string;
  readonly ipv6_cidr_block_network_border_group?: string;
  readonly main_route_table_id!: string;
  readonly owner_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcArgs) {
    super(config, "resource", args, resourceName, "aws_vpc");
  }
}
