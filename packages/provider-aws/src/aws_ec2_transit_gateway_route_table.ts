import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayRouteTableArgs {
  tags?: {
    [key: string]: string;
  };
  transit_gateway_id: string;
}
export class aws_ec2_transit_gateway_route_table extends TerraformResource {
  readonly arn!: string;
  readonly default_association_route_table!: boolean;
  readonly default_propagation_route_table!: boolean;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayRouteTableArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_route_table");
  }
}