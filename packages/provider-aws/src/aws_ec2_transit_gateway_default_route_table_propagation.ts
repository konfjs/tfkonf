import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayDefaultRouteTablePropagationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2TransitGatewayDefaultRouteTablePropagationArgs {
  transit_gateway_id: string;
  transit_gateway_route_table_id: string;
  timeouts: AwsEc2TransitGatewayDefaultRouteTablePropagationArgsTimeouts;
}
export class aws_ec2_transit_gateway_default_route_table_propagation extends TerraformResource {
  readonly id!: string;
  readonly original_default_route_table_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayDefaultRouteTablePropagationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_default_route_table_propagation");
  }
}