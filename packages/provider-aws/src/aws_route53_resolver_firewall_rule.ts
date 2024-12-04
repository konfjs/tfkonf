import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverFirewallRuleArgs {
  action: string;
  block_override_dns_type?: string;
  block_override_domain?: string;
  block_override_ttl?: number;
  block_response?: string;
  firewall_domain_list_id: string;
  firewall_domain_redirection_action?: string;
  firewall_rule_group_id: string;
  name: string;
  priority: number;
  q_type?: string;
}

export class aws_route53_resolver_firewall_rule extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallRuleArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_firewall_rule");
  }
}
