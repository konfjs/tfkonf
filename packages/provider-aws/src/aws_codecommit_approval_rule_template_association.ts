import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodecommitApprovalRuleTemplateAssociationArgs {
  approval_rule_template_name: string;
  repository_name: string;
}
export class aws_codecommit_approval_rule_template_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecommitApprovalRuleTemplateAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_codecommit_approval_rule_template_association");
  }
}