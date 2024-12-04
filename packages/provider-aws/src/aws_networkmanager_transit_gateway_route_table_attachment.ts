import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkmanagerTransitGatewayRouteTableAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsNetworkmanagerTransitGatewayRouteTableAttachmentArgs {
  peering_id: string;
  tags?: { [key: string]: string };
  transit_gateway_route_table_arn: string;
  timeouts?: AwsNetworkmanagerTransitGatewayRouteTableAttachmentArgsTimeouts;
}

export class aws_networkmanager_transit_gateway_route_table_attachment extends TerraformResource {
  readonly arn!: string;
  readonly attachment_policy_rule_number!: number;
  readonly attachment_type!: string;
  readonly core_network_arn!: string;
  readonly core_network_id!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly resource_arn!: string;
  readonly segment_name!: string;
  readonly state!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerTransitGatewayRouteTableAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_transit_gateway_route_table_attachment");
  }
}
