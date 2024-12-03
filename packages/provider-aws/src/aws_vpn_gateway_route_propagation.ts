import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpnGatewayRoutePropagationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpnGatewayRoutePropagationArgs {
  route_table_id: string;
  vpn_gateway_id: string;
  timeouts?: AwsVpnGatewayRoutePropagationArgsTimeouts;
}
export class aws_vpn_gateway_route_propagation extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnGatewayRoutePropagationArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_gateway_route_propagation");
  }
}