import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayPeeringAttachmentArgsOptions {
  dynamic_routing?: string;
}
export interface AwsEc2TransitGatewayPeeringAttachmentArgs {
  peer_region: string;
  peer_transit_gateway_id: string;
  tags?: {
    [key: string]: string;
  };
  transit_gateway_id: string;
  options: AwsEc2TransitGatewayPeeringAttachmentArgsOptions;
}
export class aws_ec2_transit_gateway_peering_attachment extends TerraformResource {
  readonly id?: string;
  readonly peer_account_id?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPeeringAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_peering_attachment");
  }
}