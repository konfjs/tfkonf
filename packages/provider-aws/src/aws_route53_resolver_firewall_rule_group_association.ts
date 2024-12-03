import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRoute53ResolverFirewallRuleGroupAssociationArgs {
  firewall_rule_group_id: string;
  name: string;
  priority: number;
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
}
export class aws_route53_resolver_firewall_rule_group_association extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly mutation_protection?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallRuleGroupAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_firewall_rule_group_association");
  }
}