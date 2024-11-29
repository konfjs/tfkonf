import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53ResolverFirewallConfigArgs {
  resource_id: string;
}
export class aws_route53_resolver_firewall_config extends TerraformResource {
  readonly firewall_fail_open?: string;
  readonly id?: string;
  readonly owner_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverFirewallConfigArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_firewall_config");
  }
}