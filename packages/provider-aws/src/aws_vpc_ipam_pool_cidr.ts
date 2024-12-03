import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcIpamPoolCidrArgsCidrAuthorizationContext {
  message?: string;
  signature?: string;
}
export interface AwsVpcIpamPoolCidrArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcIpamPoolCidrArgs {
  ipam_pool_id: string;
  netmask_length?: number;
  cidr_authorization_context: AwsVpcIpamPoolCidrArgsCidrAuthorizationContext;
  timeouts?: AwsVpcIpamPoolCidrArgsTimeouts;
}
export class aws_vpc_ipam_pool_cidr extends TerraformResource {
  readonly cidr?: string;
  readonly id?: string;
  readonly ipam_pool_cidr_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamPoolCidrArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_pool_cidr");
  }
}