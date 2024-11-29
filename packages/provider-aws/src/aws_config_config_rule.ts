import { TerraformConfig, TerraformResource } from "tfs";
export interface EvaluationMode {}
export interface Scope {
  compliance_resource_id?: string;
  compliance_resource_types?: string[];
  tag_key?: string;
  tag_value?: string;
}
export interface CustomPolicyDetails {
  enable_debug_log_delivery?: boolean;
  policy_runtime: string;
  policy_text: string;
}
export interface SourceDetail {
  event_source?: string;
  maximum_execution_frequency?: string;
  message_type?: string;
}
export interface Source {
  owner: string;
  source_identifier?: string;
  custom_policy_details: CustomPolicyDetails;
  source_detail: SourceDetail;
}
export interface AwsConfigConfigRuleArgs {
  description?: string;
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  evaluation_mode: EvaluationMode;
  scope: Scope;
  source: Source;
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