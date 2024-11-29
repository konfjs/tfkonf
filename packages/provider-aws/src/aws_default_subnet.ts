import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDefaultSubnetArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDefaultSubnetArgs {
  assign_ipv6_address_on_creation?: boolean;
  availability_zone: string;
  customer_owned_ipv4_pool?: string;
  enable_dns64?: boolean;
  enable_resource_name_dns_a_record_on_launch?: boolean;
  enable_resource_name_dns_aaaa_record_on_launch?: boolean;
  force_destroy?: boolean;
  ipv6_native?: boolean;
  map_customer_owned_ip_on_launch?: boolean;
  map_public_ip_on_launch?: boolean;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsDefaultSubnetArgsTimeouts;
}
export class aws_default_subnet extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone_id!: string;
  readonly cidr_block!: string;
  readonly enable_lni_at_device_index!: number;
  readonly existing_default_subnet!: boolean;
  readonly id?: string;
  readonly ipv6_cidr_block?: string;
  readonly ipv6_cidr_block_association_id!: string;
  readonly outpost_arn!: string;
  readonly owner_id!: string;
  readonly private_dns_hostname_type_on_launch?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultSubnetArgs) {
    super(config, "resource", args, resourceName, "aws_default_subnet");
  }
}