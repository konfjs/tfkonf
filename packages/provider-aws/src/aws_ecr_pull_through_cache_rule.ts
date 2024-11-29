import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrPullThroughCacheRuleArgs {
  credential_arn?: string;
  ecr_repository_prefix: string;
  upstream_registry_url: string;
}
export class aws_ecr_pull_through_cache_rule extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrPullThroughCacheRuleArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_pull_through_cache_rule");
  }
}