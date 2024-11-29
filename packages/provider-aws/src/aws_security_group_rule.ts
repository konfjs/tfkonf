import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
}
export interface AwsSecurityGroupRuleArgs {
  cidr_blocks?: string[];
  description?: string;
  from_port: number;
  ipv6_cidr_blocks?: string[];
  prefix_list_ids?: string[];
  protocol: string;
  security_group_id: string;
  self?: boolean;
  to_port: number;
  type: string;
  timeouts: Timeouts;
}
export class aws_security_group_rule extends TerraformResource {
  readonly id?: string;
  readonly security_group_rule_id!: string;
  readonly source_security_group_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityGroupRuleArgs) {
    super(config, "resource", args, resourceName, "aws_security_group_rule");
  }
}