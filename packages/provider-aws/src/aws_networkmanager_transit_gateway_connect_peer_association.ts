import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgs {
  device_id: string;
  global_network_id: string;
  link_id?: string;
  transit_gateway_connect_peer_arn: string;
  timeouts: AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgsTimeouts;
}
export class aws_networkmanager_transit_gateway_connect_peer_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayConnectPeerAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_transit_gateway_connect_peer_association");
  }
}