import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallRuleGroupArgs {
  name: string;
  tags?: { [key: string]: string };
}

export class aws_route53_resolver_firewall_rule_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly share_status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallRuleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_firewall_rule_group");
  }
}
