import { TerraformConfig, TerraformResource } from "tfs";
export interface ErrorDocument {
  key: string;
}
export interface IndexDocument {
  suffix: string;
}
export interface RedirectAllRequestsTo {
  host_name: string;
  protocol?: string;
}
export interface Condition {
  http_error_code_returned_equals?: string;
  key_prefix_equals?: string;
}
export interface Redirect {
  host_name?: string;
  http_redirect_code?: string;
  protocol?: string;
  replace_key_prefix_with?: string;
  replace_key_with?: string;
}
export interface RoutingRule {
  condition: Condition;
  redirect: Redirect;
}
export interface AwsS3BucketWebsiteConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  error_document: ErrorDocument;
  index_document: IndexDocument;
  redirect_all_requests_to: RedirectAllRequestsTo;
  routing_rule: RoutingRule;
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