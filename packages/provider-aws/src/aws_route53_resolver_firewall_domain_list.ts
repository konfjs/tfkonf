import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRoute53ResolverFirewallDomainListArgs {
  domains?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_route53_resolver_firewall_domain_list extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallDomainListArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_firewall_domain_list");
  }
}