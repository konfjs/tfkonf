import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpnGatewayRoutePropagationArgs {
  route_table_id: string;
  vpn_gateway_id: string;
  timeouts: Timeouts;
}
export class aws_vpn_gateway_route_propagation extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnGatewayRoutePropagationArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_gateway_route_propagation");
  }
}