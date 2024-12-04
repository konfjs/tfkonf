import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverQueryLogConfigAssociationArgs {
  resolver_query_log_config_id: string;
  resource_id: string;
}

export class aws_route53_resolver_query_log_config_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverQueryLogConfigAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_query_log_config_association");
  }
}
