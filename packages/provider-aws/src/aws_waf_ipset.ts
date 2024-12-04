import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafIpsetArgsIpSetDescriptors {
  type: string;
  value: string;
}

export interface AwsWafIpsetArgs {
  name: string;
  ip_set_descriptors: AwsWafIpsetArgsIpSetDescriptors;
}

export class aws_waf_ipset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafIpsetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_ipset");
  }
}
