import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEc2TransitGatewayArgs {
  amazon_side_asn?: number;
  auto_accept_shared_attachments?: string;
  default_route_table_association?: string;
  default_route_table_propagation?: string;
  description?: string;
  dns_support?: string;
  multicast_support?: string;
  security_group_referencing_support?: string;
  tags?: { [key: string]: string };
  transit_gateway_cidr_blocks?: string[];
  vpn_ecmp_support?: string;
  timeouts?: AwsEc2TransitGatewayArgsTimeouts;
}

export class aws_ec2_transit_gateway extends TerraformResource {
  readonly arn!: string;
  readonly association_default_route_table_id!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly propagation_default_route_table_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway");
  }
}
