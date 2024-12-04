import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodecommitApprovalRuleTemplateArgs {
  content: string;
  description?: string;
  name: string;
}

export class aws_codecommit_approval_rule_template extends TerraformResource {
  readonly approval_rule_template_id!: string;
  readonly creation_date!: string;
  readonly id?: string;
  readonly last_modified_date!: string;
  readonly last_modified_user!: string;
  readonly rule_content_sha256!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecommitApprovalRuleTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_codecommit_approval_rule_template");
  }
}
