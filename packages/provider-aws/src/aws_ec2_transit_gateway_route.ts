import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEc2TransitGatewayRouteArgs {
  blackhole?: boolean;
  destination_cidr_block: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_route_table_id: string;
}
export class aws_ec2_transit_gateway_route extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_route");
  }
}