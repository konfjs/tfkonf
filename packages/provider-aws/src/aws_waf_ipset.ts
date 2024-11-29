import { TerraformConfig, TerraformResource } from "tfs";
export interface IpSetDescriptors {
  type: string;
  value: string;
}
export interface AwsWafIpsetArgs {
  name: string;
  ip_set_descriptors: IpSetDescriptors;
}
export class aws_waf_ipset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafIpsetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_ipset");
  }
}