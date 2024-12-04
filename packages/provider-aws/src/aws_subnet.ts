import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSubnetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSubnetArgs {
  assign_ipv6_address_on_creation?: boolean;
  cidr_block?: string;
  customer_owned_ipv4_pool?: string;
  enable_dns64?: boolean;
  enable_lni_at_device_index?: number;
  enable_resource_name_dns_a_record_on_launch?: boolean;
  enable_resource_name_dns_aaaa_record_on_launch?: boolean;
  ipv6_cidr_block?: string;
  ipv6_native?: boolean;
  map_customer_owned_ip_on_launch?: boolean;
  map_public_ip_on_launch?: boolean;
  outpost_arn?: string;
  tags?: { [key: string]: string };
  vpc_id: string;
  timeouts?: AwsSubnetArgsTimeouts;
}

export class aws_subnet extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone?: string;
  readonly availability_zone_id?: string;
  readonly id?: string;
  readonly ipv6_cidr_block_association_id!: string;
  readonly owner_id!: string;
  readonly private_dns_hostname_type_on_launch?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSubnetArgs) {
    super(config, "resource", args, resourceName, "aws_subnet");
  }
}
