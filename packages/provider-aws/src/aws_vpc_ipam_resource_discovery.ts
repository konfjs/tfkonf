import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcIpamResourceDiscoveryArgsOperatingRegions {
  region_name: string;
}
export interface AwsVpcIpamResourceDiscoveryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcIpamResourceDiscoveryArgs {
  description?: string;
  tags?: {
    [key: string]: string;
  };
  operating_regions: AwsVpcIpamResourceDiscoveryArgsOperatingRegions;
  timeouts?: AwsVpcIpamResourceDiscoveryArgsTimeouts;
}
export class aws_vpc_ipam_resource_discovery extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly ipam_resource_discovery_region!: string;
  readonly is_default!: boolean;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamResourceDiscoveryArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_resource_discovery");
  }
}