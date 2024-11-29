import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53ResolverDnssecConfigArgs {
  resource_id: string;
}
export class aws_route53_resolver_dnssec_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly validation_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverDnssecConfigArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_dnssec_config");
  }
}