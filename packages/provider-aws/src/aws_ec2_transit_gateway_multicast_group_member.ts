import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayMulticastGroupMemberArgs {
  group_ip_address: string;
  network_interface_id: string;
  transit_gateway_multicast_domain_id: string;
}
export class aws_ec2_transit_gateway_multicast_group_member extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastGroupMemberArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_multicast_group_member");
  }
}