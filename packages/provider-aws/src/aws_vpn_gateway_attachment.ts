import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpnGatewayAttachmentArgs {
  vpc_id: string;
  vpn_gateway_id: string;
}
export class aws_vpn_gateway_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnGatewayAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_gateway_attachment");
  }
}