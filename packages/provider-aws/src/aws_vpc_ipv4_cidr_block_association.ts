import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcIpv4CidrBlockAssociationArgs {
  ipv4_ipam_pool_id?: string;
  ipv4_netmask_length?: number;
  vpc_id: string;
  timeouts: Timeouts;
}
export class aws_vpc_ipv4_cidr_block_association extends TerraformResource {
  readonly cidr_block?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpv4CidrBlockAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipv4_cidr_block_association");
  }
}