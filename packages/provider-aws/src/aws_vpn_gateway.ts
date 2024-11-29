import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpnGatewayArgs {
  availability_zone?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_vpn_gateway extends TerraformResource {
  readonly amazon_side_asn?: string;
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpnGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_vpn_gateway");
  }
}