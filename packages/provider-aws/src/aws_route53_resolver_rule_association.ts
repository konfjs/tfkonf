import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53ResolverRuleAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsRoute53ResolverRuleAssociationArgs {
  name?: string;
  resolver_rule_id: string;
  vpc_id: string;
  timeouts: AwsRoute53ResolverRuleAssociationArgsTimeouts;
}
export class aws_route53_resolver_rule_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverRuleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_rule_association");
  }
}