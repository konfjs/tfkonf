import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayMulticastDomainArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2TransitGatewayMulticastDomainArgs {
  auto_accept_shared_associations?: string;
  igmpv2_support?: string;
  static_sources_support?: string;
  tags?: {
    [key: string]: string;
  };
  transit_gateway_id: string;
  timeouts: AwsEc2TransitGatewayMulticastDomainArgstimeouts;
}
export class aws_ec2_transit_gateway_multicast_domain extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastDomainArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_multicast_domain");
  }
}