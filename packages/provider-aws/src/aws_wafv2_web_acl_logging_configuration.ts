import { TerraformConfig, TerraformResource } from "tfs";
export interface ActionCondition {
  action: string;
}
export interface LabelNameCondition {
  label_name: string;
}
export interface Condition {
  action_condition: ActionCondition;
  label_name_condition: LabelNameCondition;
}
export interface Filter {
  behavior: string;
  requirement: string;
  condition: Condition;
}
export interface LoggingFilter {
  default_behavior: string;
  filter: Filter;
}
export interface Method {}
export interface QueryString {}
export interface SingleHeader {
  name: string;
}
export interface UriPath {}
export interface RedactedFields {
  method: Method;
  query_string: QueryString;
  single_header: SingleHeader;
  uri_path: UriPath;
}
export interface AwsWafv2WebAclLoggingConfigurationArgs {
  log_destination_configs: string[];
  resource_arn: string;
  logging_filter: LoggingFilter;
  redacted_fields: RedactedFields;
}
export class aws_wafv2_web_acl_logging_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2WebAclLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_web_acl_logging_configuration");
  }
}