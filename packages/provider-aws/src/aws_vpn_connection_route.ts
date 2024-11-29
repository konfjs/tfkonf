import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpnConnectionRouteArgs {
  destination_cidr_block: string;
  vpn_connection_id: string;
}
export class aws_vpn_connection_route extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnConnectionRouteArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_connection_route");
  }
}