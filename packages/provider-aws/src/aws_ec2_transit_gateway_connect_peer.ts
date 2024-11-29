import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2TransitGatewayConnectPeerArgs {
  inside_cidr_blocks: string[];
  peer_address: string;
  tags?: {
    [key: string]: string;
  };
  transit_gateway_attachment_id: string;
  timeouts: Timeouts;
}
export class aws_ec2_transit_gateway_connect_peer extends TerraformResource {
  readonly arn!: string;
  readonly bgp_asn?: string;
  readonly bgp_peer_address!: string;
  readonly bgp_transit_gateway_addresses!: string[];
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly transit_gateway_address?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayConnectPeerArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_connect_peer");
  }
}