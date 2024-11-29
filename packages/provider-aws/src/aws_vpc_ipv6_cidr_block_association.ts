import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcIpv6CidrBlockAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcIpv6CidrBlockAssociationArgs {
  ipv6_ipam_pool_id?: string;
  ipv6_netmask_length?: number;
  vpc_id: string;
  timeouts: AwsVpcIpv6CidrBlockAssociationArgsTimeouts;
}
export class aws_vpc_ipv6_cidr_block_association extends TerraformResource {
  readonly assign_generated_ipv6_cidr_block?: boolean;
  readonly id?: string;
  readonly ip_source!: string;
  readonly ipv6_address_attribute!: string;
  readonly ipv6_cidr_block?: string;
  readonly ipv6_pool?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpv6CidrBlockAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipv6_cidr_block_association");
  }
}