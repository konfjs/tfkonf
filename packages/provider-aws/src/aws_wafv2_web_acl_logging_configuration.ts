import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilterconditionActionCondition {
  action: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilterconditionLabelNameCondition {
  label_name: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfiltercondition {
  action_condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilterconditionActionCondition;
  label_name_condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilterconditionLabelNameCondition;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilter {
  behavior: string;
  requirement: string;
  condition: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfiltercondition;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsLoggingFilter {
  default_behavior: string;
  filter: AwsWafv2WebAclLoggingConfigurationArgsLoggingFilterfilter;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsmethod {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsQueryString {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsSingleHeader {
  name: string;
}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsUriPath {}
export interface AwsWafv2WebAclLoggingConfigurationArgsRedactedFields {
  method: AwsWafv2WebAclLoggingConfigurationArgsRedactedFieldsmethod;
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