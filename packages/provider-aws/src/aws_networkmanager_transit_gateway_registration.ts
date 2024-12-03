import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNetworkmanagerTransitGatewayRegistrationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerTransitGatewayRegistrationArgs {
  global_network_id: string;
  transit_gateway_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayRegistrationArgsTimeouts;
}
export class aws_networkmanager_transit_gateway_registration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayRegistrationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_transit_gateway_registration");
  }
}