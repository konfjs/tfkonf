import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConfigOrganizationCustomPolicyRuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsConfigOrganizationCustomPolicyRuleArgs {
  debug_log_delivery_accounts?: string[];
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  policy_runtime: string;
  policy_text: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  tag_key_scope?: string;
  tag_value_scope?: string;
  trigger_types: string[];
  timeouts: AwsConfigOrganizationCustomPolicyRuleArgstimeouts;
}
export class aws_config_organization_custom_policy_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigOrganizationCustomPolicyRuleArgs) {
    super(config, "resource", args, resourceName, "aws_config_organization_custom_policy_rule");
  }
}