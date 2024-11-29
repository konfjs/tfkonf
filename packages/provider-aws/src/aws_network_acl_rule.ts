import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkAclRuleArgs {
  cidr_block?: string;
  egress?: boolean;
  from_port?: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  network_acl_id: string;
  protocol: string;
  rule_action: string;
  rule_number: number;
  to_port?: number;
}
export class aws_network_acl_rule extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkAclRuleArgs) {
    super(config, "resource", args, resourceName, "aws_network_acl_rule");
  }
}