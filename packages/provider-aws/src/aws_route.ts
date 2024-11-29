import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRouteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRouteArgs {
  carrier_gateway_id?: string;
  core_network_arn?: string;
  destination_cidr_block?: string;
  destination_ipv6_cidr_block?: string;
  destination_prefix_list_id?: string;
  egress_only_gateway_id?: string;
  gateway_id?: string;
  local_gateway_id?: string;
  nat_gateway_id?: string;
  route_table_id: string;
  transit_gateway_id?: string;
  vpc_endpoint_id?: string;
  vpc_peering_connection_id?: string;
  timeouts: AwsRouteArgsTimeouts;
}
export class aws_route extends TerraformResource {
  readonly id?: string;
  readonly instance_id!: string;
  readonly instance_owner_id!: string;
  readonly network_interface_id?: string;
  readonly origin!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRouteArgs) {
    super(config, "resource", args, resourceName, "aws_route");
  }
}