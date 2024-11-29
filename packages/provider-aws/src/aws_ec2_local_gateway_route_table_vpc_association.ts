import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2LocalGatewayRouteTableVpcAssociationArgs {
  local_gateway_route_table_id: string;
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
}
export class aws_ec2_local_gateway_route_table_vpc_association extends TerraformResource {
  readonly id?: string;
  readonly local_gateway_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2LocalGatewayRouteTableVpcAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_local_gateway_route_table_vpc_association");
  }
}