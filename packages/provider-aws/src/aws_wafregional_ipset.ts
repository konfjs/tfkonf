import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafregionalIpsetArgsIpSetDescriptor {
  type: string;
  value: string;
}
export interface AwsWafregionalIpsetArgs {
  name: string;
  ip_set_descriptor: AwsWafregionalIpsetArgsIpSetDescriptor;
}
export class aws_wafregional_ipset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalIpsetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_ipset");
  }
}