import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsWafv2IpSetArgs {
  addresses?: string[];
  description?: string;
  ip_address_version: string;
  name: string;
  scope: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_wafv2_ip_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly lock_token!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2IpSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_ip_set");
  }
}