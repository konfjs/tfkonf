import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2LocalGatewayRouteArgs {
  destination_cidr_block: string;
  local_gateway_route_table_id: string;
  local_gateway_virtual_interface_group_id: string;
}

export class aws_ec2_local_gateway_route extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2LocalGatewayRouteArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_local_gateway_route");
  }
}
