import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCustomerGatewayArgs {
  bgp_asn?: string;
  bgp_asn_extended?: string;
  certificate_arn?: string;
  device_name?: string;
  ip_address?: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
}
export class aws_customer_gateway extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCustomerGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_customer_gateway");
  }
}