import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcIpamPreviewNextCidrArgs {
  disallowed_cidrs?: string[];
  ipam_pool_id: string;
  netmask_length?: number;
}
export class aws_vpc_ipam_preview_next_cidr extends TerraformResource {
  readonly cidr!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamPreviewNextCidrArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_preview_next_cidr");
  }
}