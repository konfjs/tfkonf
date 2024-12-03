import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEc2ClientVpnRouteArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2ClientVpnRouteArgs {
  client_vpn_endpoint_id: string;
  description?: string;
  destination_cidr_block: string;
  target_vpc_subnet_id: string;
  timeouts?: AwsEc2ClientVpnRouteArgsTimeouts;
}
export class aws_ec2_client_vpn_route extends TerraformResource {
  readonly id?: string;
  readonly origin!: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ClientVpnRouteArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_client_vpn_route");
  }
}