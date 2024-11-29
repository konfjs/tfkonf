import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcIpamPoolCidrAllocationArgs {
  description?: string;
  disallowed_cidrs?: string[];
  ipam_pool_id: string;
}
export class aws_vpc_ipam_pool_cidr_allocation extends TerraformResource {
  readonly cidr?: string;
  readonly id?: string;
  readonly ipam_pool_allocation_id!: string;
  readonly netmask_length?: number;
  readonly resource_id!: string;
  readonly resource_owner!: string;
  readonly resource_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamPoolCidrAllocationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_pool_cidr_allocation");
  }
}