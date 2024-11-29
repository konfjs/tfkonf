import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayRouteTablePropagationArgs {
  transit_gateway_attachment_id: string;
  transit_gateway_route_table_id: string;
}
export class aws_ec2_transit_gateway_route_table_propagation extends TerraformResource {
  readonly id?: string;
  readonly resource_id!: string;
  readonly resource_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteTablePropagationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_route_table_propagation");
  }
}