import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayMulticastGroupSourceArgs {
  group_ip_address: string;
  network_interface_id: string;
  transit_gateway_multicast_domain_id: string;
}
export class aws_ec2_transit_gateway_multicast_group_source extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastGroupSourceArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_multicast_group_source");
  }
}