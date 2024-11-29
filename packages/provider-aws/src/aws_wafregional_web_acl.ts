import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsWafregionalWebAclArgsDefaultAction {
  type: string;
}
export interface AwsWafregionalWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafregionalWebAclArgsLoggingConfigurationRedactedFields {
  field_to_match: AwsWafregionalWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch;
}
export interface AwsWafregionalWebAclArgsLoggingConfiguration {
  log_destination: string;
  redacted_fields: AwsWafregionalWebAclArgsLoggingConfigurationRedactedFields;
}
export interface AwsWafregionalWebAclArgsRuleAction {
  type: string;
}
export interface AwsWafregionalWebAclArgsRuleOverrideAction {
  type: string;
}
export interface AwsWafregionalWebAclArgsRule {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafregionalWebAclArgsRuleAction;
  override_action: AwsWafregionalWebAclArgsRuleOverrideAction;
}
export interface AwsWafregionalWebAclArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  default_action: AwsWafregionalWebAclArgsDefaultAction;
  logging_configuration: AwsWafregionalWebAclArgsLoggingConfiguration;
  rule: AwsWafregionalWebAclArgsRule;
}
export class aws_wafregional_web_acl extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalWebAclArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_web_acl");
  }
}