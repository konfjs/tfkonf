import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConfigOrganizationManagedRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsConfigOrganizationManagedRuleArgs {
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  maximum_execution_frequency?: string;
  name: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  rule_identifier: string;
  tag_key_scope?: string;
  tag_value_scope?: string;
  timeouts?: AwsConfigOrganizationManagedRuleArgsTimeouts;
}
export class aws_config_organization_managed_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigOrganizationManagedRuleArgs) {
    super(config, "resource", args, resourceName, "aws_config_organization_managed_rule");
  }
}