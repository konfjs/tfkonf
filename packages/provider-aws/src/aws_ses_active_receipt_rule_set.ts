import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesActiveReceiptRuleSetArgs {
  rule_set_name: string;
}

export class aws_ses_active_receipt_rule_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesActiveReceiptRuleSetArgs) {
    super(config, "resource", args, resourceName, "aws_ses_active_receipt_rule_set");
  }
}
