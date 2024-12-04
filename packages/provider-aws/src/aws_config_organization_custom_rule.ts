import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigOrganizationCustomRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsConfigOrganizationCustomRuleArgs {
  description?: string;
  excluded_accounts?: string[];
  input_parameters?: string;
  lambda_function_arn: string;
  maximum_execution_frequency?: string;
  name: string;
  resource_id_scope?: string;
  resource_types_scope?: string[];
  tag_key_scope?: string;
  tag_value_scope?: string;
  trigger_types: string[];
  timeouts?: AwsConfigOrganizationCustomRuleArgsTimeouts;
}

export class aws_config_organization_custom_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigOrganizationCustomRuleArgs) {
    super(config, "resource", args, resourceName, "aws_config_organization_custom_rule");
  }
}
