import { TerraformConfig, TerraformResource } from "tfs";
export interface Filter {
  exclude_matched_pattern?: boolean;
  pattern: string;
  type: string;
}
export interface FilterGroup {
  filter: Filter;
}
export interface ScopeConfiguration {
  domain?: string;
  name: string;
  scope: string;
}
export interface AwsCodebuildWebhookArgs {
  branch_filter?: string;
  build_type?: string;
  project_name: string;
  filter_group: FilterGroup;
  scope_configuration: ScopeConfiguration;
}
export class aws_codebuild_webhook extends TerraformResource {
  readonly id?: string;
  readonly payload_url!: string;
  readonly secret!: string;
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildWebhookArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_webhook");
  }
}