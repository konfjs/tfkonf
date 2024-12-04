import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsPolicyTemplateArgs {
  description?: string;
  policy_store_id: string;
  statement: string;
}

export class aws_verifiedpermissions_policy_template extends TerraformResource {
  readonly created_date!: string;
  readonly id!: string;
  readonly policy_template_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_policy_template");
  }
}
