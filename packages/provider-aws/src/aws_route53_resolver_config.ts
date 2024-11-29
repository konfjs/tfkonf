import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53ResolverConfigArgs {
  autodefined_reverse_flag: string;
  resource_id: string;
}
export class aws_route53_resolver_config extends TerraformResource {
  readonly id?: string;
  readonly owner_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverConfigArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_config");
  }
}