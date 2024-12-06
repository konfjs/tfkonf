import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayMulticastDomainAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsEc2TransitGatewayMulticastDomainAssociationArgs {
  subnet_id: string;
  transit_gateway_attachment_id: string;
  transit_gateway_multicast_domain_id: string;
  timeouts?: AwsEc2TransitGatewayMulticastDomainAssociationArgsTimeouts;
}

export class aws_ec2_transit_gateway_multicast_domain_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayMulticastDomainAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_multicast_domain_association");
  }
}
