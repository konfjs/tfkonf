import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ResolverQueryLogConfigArgs {
  destination_arn: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_route53_resolver_query_log_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly share_status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverQueryLogConfigArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_query_log_config");
  }
}
