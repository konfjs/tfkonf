import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionActionCondition {
  action: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionLabelNameCondition {
  label_name: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterCondition {
  action_condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionActionCondition;
  label_name_condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterConditionLabelNameCondition;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilter {
  behavior: string;
  requirement: string;
  condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilterCondition;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilter {
  default_behavior: string;
  filter: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterFilter;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsMethod {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsQueryString {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsSingleHeader {
  name: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsUriPath {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFields {
  method: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsMethod;
  query_string: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsQueryString;
  single_header: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsSingleHeader;
  uri_path: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsUriPath;
}
export interface AwsWafv2WebAclLoggingConfigurationArgs {
  log_destination_configs: string[];
  resource_arn: string;
  logging_filter: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilter;
  redacted_fields: AwsWafv2WebAclLoggingConfigurationArgsRedactedFields;
}
export class aws_wafv2_web_acl_logging_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2WebAclLoggingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_web_acl_logging_configuration");
  }
}