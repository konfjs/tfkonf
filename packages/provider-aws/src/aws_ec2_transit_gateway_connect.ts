import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2TransitGatewayConnectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2TransitGatewayConnectArgs {
  protocol?: string;
  tags?: {
    [key: string]: string;
  };
  transit_gateway_default_route_table_association?: boolean;
  transit_gateway_default_route_table_propagation?: boolean;
  transit_gateway_id: string;
  transport_attachment_id: string;
  timeouts: AwsEc2TransitGatewayConnectArgsTimeouts;
}
export class aws_ec2_transit_gateway_connect extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayConnectArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_connect");
  }
}