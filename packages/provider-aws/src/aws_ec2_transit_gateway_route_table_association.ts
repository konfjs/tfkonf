import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayRouteTableAssociationArgs {
  replace_existing_association?: boolean;
  transit_gateway_attachment_id: string;
  transit_gateway_route_table_id: string;
}
export class aws_ec2_transit_gateway_route_table_association extends TerraformResource {
  readonly id?: string;
  readonly resource_id!: string;
  readonly resource_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_route_table_association");
  }
}