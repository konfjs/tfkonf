import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketWebsiteConfigurationArgsErrorDocument {
  key: string;
}
export interface AwsS3BucketWebsiteConfigurationArgsIndexDocument {
  suffix: string;
}
export interface AwsS3BucketWebsiteConfigurationArgsRedirectAllRequestsTo {
  host_name: string;
  protocol?: string;
}
export interface AwsS3BucketWebsiteConfigurationArgsRoutingRuleCondition {
  http_error_code_returned_equals?: string;
  key_prefix_equals?: string;
}
export interface AwsS3BucketWebsiteConfigurationArgsRoutingRuleRedirect {
  host_name?: string;
  http_redirect_code?: string;
  protocol?: string;
  replace_key_prefix_with?: string;
  replace_key_with?: string;
}
export interface AwsS3BucketWebsiteConfigurationArgsRoutingRule {
  condition: AwsS3BucketWebsiteConfigurationArgsRoutingRuleCondition;
  redirect: AwsS3BucketWebsiteConfigurationArgsRoutingRuleRedirect;
}
export interface AwsS3BucketWebsiteConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  error_document: AwsS3BucketWebsiteConfigurationArgsErrorDocument;
  index_document: AwsS3BucketWebsiteConfigurationArgsIndexDocument;
  redirect_all_requests_to: AwsS3BucketWebsiteConfigurationArgsRedirectAllRequestsTo;
  routing_rule: AwsS3BucketWebsiteConfigurationArgsRoutingRule;
}
export class aws_s3_bucket_website_configuration extends TerraformResource {
  readonly id?: string;
  readonly routing_rules?: string;
  readonly website_domain!: string;
  readonly website_endpoint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketWebsiteConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_website_configuration");
  }
}