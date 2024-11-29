import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConfigConfigRuleArgsEvaluationMode {}
export interface AwsConfigConfigRuleArgsScope {
  compliance_resource_id?: string;
  compliance_resource_types?: string[];
  tag_key?: string;
  tag_value?: string;
}
export interface AwsConfigConfigRuleArgsSourceCustomPolicyDetails {
  enable_debug_log_delivery?: boolean;
  policy_runtime: string;
  policy_text: string;
}
export interface AwsConfigConfigRuleArgsSourceSourceDetail {
  event_source?: string;
  maximum_execution_frequency?: string;
  message_type?: string;
}
export interface AwsConfigConfigRuleArgsSource {
  owner: string;
  source_identifier?: string;
  custom_policy_details: AwsConfigConfigRuleArgsSourceCustomPolicyDetails;
  source_detail: AwsConfigConfigRuleArgsSourceSourceDetail;
}
export interface AwsConfigConfigRuleArgs {
  description?: string;
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  evaluation_mode: AwsConfigConfigRuleArgsEvaluationMode;
  scope: AwsConfigConfigRuleArgsScope;
  source: AwsConfigConfigRuleArgsSource;
}
export class aws_config_config_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly rule_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConfigRuleArgs) {
    super(config, "resource", args, resourceName, "aws_config_config_rule");
  }
}