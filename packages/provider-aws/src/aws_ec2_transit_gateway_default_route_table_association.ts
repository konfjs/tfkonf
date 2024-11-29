import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgs {
  transit_gateway_id: string;
  transit_gateway_route_table_id: string;
  timeouts: AwsEc2TransitGatewayDefaultRouteTableAssociationArgsTimeouts;
}
export class aws_ec2_transit_gateway_default_route_table_association extends TerraformResource {
  readonly id!: string;
  readonly original_default_route_table_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayDefaultRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_default_route_table_association");
  }
}