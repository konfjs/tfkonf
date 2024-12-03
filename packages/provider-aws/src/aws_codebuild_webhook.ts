import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodebuildWebhookArgsFilterGroupFilter {
  exclude_matched_pattern?: boolean;
  pattern: string;
  type: string;
}
export interface AwsCodebuildWebhookArgsFilterGroup {
  filter: AwsCodebuildWebhookArgsFilterGroupFilter;
}
export interface AwsCodebuildWebhookArgsScopeConfiguration {
  domain?: string;
  name: string;
  scope: string;
}
export interface AwsCodebuildWebhookArgs {
  branch_filter?: string;
  build_type?: string;
  project_name: string;
  filter_group: AwsCodebuildWebhookArgsFilterGroup;
  scope_configuration: AwsCodebuildWebhookArgsScopeConfiguration;
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