import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDefaultVpcArgs {
  assign_generated_ipv6_cidr_block?: boolean;
  enable_dns_hostnames?: boolean;
  enable_dns_support?: boolean;
  force_destroy?: boolean;
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  tags?: {
    [key: string]: string;
  };
}
export class aws_default_vpc extends TerraformResource {
  readonly arn!: string;
  readonly cidr_block!: string;
  readonly default_network_acl_id!: string;
  readonly default_route_table_id!: string;
  readonly default_security_group_id!: string;
  readonly dhcp_options_id!: string;
  readonly enable_network_address_usage_metrics?: boolean;
  readonly existing_default_vpc!: boolean;
  readonly id?: string;
  readonly instance_tenancy!: string;
  readonly ipv6_association_id!: string;
  readonly ipv6_cidr_block?: string;
  readonly ipv6_cidr_block_network_border_group?: string;
  readonly main_route_table_id!: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultVpcArgs) {
    super(config, "resource", args, resourceName, "aws_default_vpc");
  }
}