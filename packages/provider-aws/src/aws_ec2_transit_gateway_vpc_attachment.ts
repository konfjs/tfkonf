import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayVpcAttachmentArgs {
  appliance_mode_support?: string;
  dns_support?: string;
  ipv6_support?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  transit_gateway_id: string;
  vpc_id: string;
}
export class aws_ec2_transit_gateway_vpc_attachment extends TerraformResource {
  readonly id?: string;
  readonly security_group_referencing_support?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly transit_gateway_default_route_table_association?: boolean;
  readonly transit_gateway_default_route_table_propagation?: boolean;
  readonly vpc_owner_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayVpcAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_vpc_attachment");
  }
}