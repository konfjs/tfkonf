import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcEndpointRouteTableAssociationArgs {
  route_table_id: string;
  vpc_endpoint_id: string;
}
export class aws_vpc_endpoint_route_table_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_route_table_association");
  }
}