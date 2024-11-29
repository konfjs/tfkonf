import { TerraformConfig, TerraformResource } from "tfs";
export interface TargetIp {
  ip?: string;
  ipv6?: string;
  port?: number;
  protocol?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRoute53ResolverRuleArgs {
  domain_name: string;
  name?: string;
  resolver_endpoint_id?: string;
  rule_type: string;
  tags?: {
    [key: string]: string;
  };
  target_ip: TargetIp;
  timeouts: Timeouts;
}
export class aws_route53_resolver_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly share_status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverRuleArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_rule");
  }
}