import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcIpamResourceDiscoveryAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcIpamResourceDiscoveryAssociationArgs {
  ipam_id: string;
  ipam_resource_discovery_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsVpcIpamResourceDiscoveryAssociationArgsTimeouts;
}
export class aws_vpc_ipam_resource_discovery_association extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly ipam_arn!: string;
  readonly ipam_region!: string;
  readonly is_default!: boolean;
  readonly owner_id!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamResourceDiscoveryAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_resource_discovery_association");
  }
}