import { TerraformConfig, TerraformResource } from "tfs";
export interface DefaultAction {
  type: string;
}
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface RedactedFields {
  field_to_match: FieldToMatch;
}
export interface LoggingConfiguration {
  log_destination: string;
  redacted_fields: RedactedFields;
}
export interface Action {
  type: string;
}
export interface OverrideAction {
  type: string;
}
export interface Rules {
  priority: number;
  rule_id: string;
  type?: string;
  action: Action;
  override_action: OverrideAction;
}
export interface AwsWafWebAclArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  default_action: DefaultAction;
  logging_configuration: LoggingConfiguration;
  rules: Rules;
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