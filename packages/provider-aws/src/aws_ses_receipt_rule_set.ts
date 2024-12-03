import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSesReceiptRuleSetArgs {
  rule_set_name: string;
}
export class aws_ses_receipt_rule_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesReceiptRuleSetArgs) {
    super(config, "resource", args, resourceName, "aws_ses_receipt_rule_set");
  }
}