import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerTransitGatewayRegistrationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerTransitGatewayRegistrationArgs {
  global_network_id: string;
  transit_gateway_arn: string;
  timeouts: AwsNetworkmanagerTransitGatewayRegistrationArgstimeouts;
}
export class aws_networkmanager_transit_gateway_registration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayRegistrationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_transit_gateway_registration");
  }
}