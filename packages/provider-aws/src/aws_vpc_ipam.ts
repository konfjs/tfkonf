import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcIpamArgsOperatingRegions {
  region_name: string;
}
export interface AwsVpcIpamArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcIpamArgs {
  cascade?: boolean;
  description?: string;
  enable_private_gua?: boolean;
  tags?: {
    [key: string]: string;
  };
  tier?: string;
  operating_regions: AwsVpcIpamArgsOperatingRegions;
  timeouts: AwsVpcIpamArgsTimeouts;
}
export class aws_vpc_ipam extends TerraformResource {
  readonly arn!: string;
  readonly default_resource_discovery_association_id!: string;
  readonly default_resource_discovery_id!: string;
  readonly id?: string;
  readonly private_default_scope_id!: string;
  readonly public_default_scope_id!: string;
  readonly scope_count!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam");
  }
}