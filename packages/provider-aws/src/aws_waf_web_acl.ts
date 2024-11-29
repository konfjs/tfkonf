import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafWebAclArgsDefaultAction {
  type: string;
}
export interface AwsWafWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafWebAclArgsLoggingConfigurationRedactedFields {
  field_to_match: AwsWafWebAclArgsLoggingConfigurationRedactedFieldsFieldToMatch;
}
export interface AwsWafWebAclArgsLoggingConfiguration {
  log_destination: string;
  redacted_fields: AwsWafWebAclArgsLoggingConfigurationRedactedFields;
}
export interface AwsWafWebAclArgsrulesaction {
  type: string;
}
export interface AwsWafWebAclArgsrulesOverrideAction {
  type: string;
}
export interface AwsWafWebAclArgsrules {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafWebAclArgsrulesaction;
  override_action: AwsWafWebAclArgsrulesOverrideAction;
}
export interface AwsWafWebAclArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  default_action: AwsWafWebAclArgsDefaultAction;
  logging_configuration: AwsWafWebAclArgsLoggingConfiguration;
  rules: AwsWafWebAclArgsrules;
}
export class aws_waf_web_acl extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafWebAclArgs) {
    super(config, "resource", args, resourceName, "aws_waf_web_acl");
  }
}