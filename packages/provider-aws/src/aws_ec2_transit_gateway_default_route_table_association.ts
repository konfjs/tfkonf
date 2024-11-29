import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2TransitGatewayDefaultRouteTableAssociationArgs {
  transit_gateway_id: string;
  transit_gateway_route_table_id: string;
  timeouts: AwsEc2TransitGatewayDefaultRouteTableAssociationArgstimeouts;
}
export class aws_ec2_transit_gateway_default_route_table_association extends TerraformResource {
  readonly id!: string;
  readonly original_default_route_table_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayDefaultRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_default_route_table_association");
  }
}