import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerTransitGatewayPeeringArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerTransitGatewayPeeringArgs {
  core_network_id: string;
  tags?: { [key: string]: string };
  transit_gateway_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayPeeringArgsTimeouts;
}

export class aws_networkmanager_transit_gateway_peering extends TerraformResource {
  readonly arn!: string;
  readonly core_network_arn!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly peering_type!: string;
  readonly resource_arn!: string;
  readonly tags_all?: { [key: string]: string };
  readonly transit_gateway_peering_attachment_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayPeeringArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_transit_gateway_peering");
  }
}
