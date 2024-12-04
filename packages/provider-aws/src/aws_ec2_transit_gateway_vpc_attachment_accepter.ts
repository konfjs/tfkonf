import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayVpcAttachmentAccepterArgs {
  tags?: { [key: string]: string };
  transit_gateway_attachment_id: string;
  transit_gateway_default_route_table_association?: boolean;
  transit_gateway_default_route_table_propagation?: boolean;
}

export class aws_ec2_transit_gateway_vpc_attachment_accepter extends TerraformResource {
  readonly appliance_mode_support!: string;
  readonly dns_support!: string;
  readonly id?: string;
  readonly ipv6_support!: string;
  readonly security_group_referencing_support!: string;
  readonly subnet_ids!: string[];
  readonly tags_all?: { [key: string]: string };
  readonly transit_gateway_id!: string;
  readonly vpc_id!: string;
  readonly vpc_owner_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayVpcAttachmentAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_vpc_attachment_accepter");
  }
}
