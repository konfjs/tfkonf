import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPeeringAttachmentAccepterArgs {
  tags?: { [key: string]: string };
  transit_gateway_attachment_id: string;
}

export class aws_ec2_transit_gateway_peering_attachment_accepter extends TerraformResource {
  readonly id?: string;
  readonly peer_account_id!: string;
  readonly peer_region!: string;
  readonly peer_transit_gateway_id!: string;
  readonly tags_all?: { [key: string]: string };
  readonly transit_gateway_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPeeringAttachmentAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_peering_attachment_accepter");
  }
}
