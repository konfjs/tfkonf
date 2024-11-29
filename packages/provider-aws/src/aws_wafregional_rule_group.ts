import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafregionalRuleGroupArgsActivatedRuleAction {
  type: string;
}
export interface AwsWafregionalRuleGroupArgsActivatedRule {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafregionalRuleGroupArgsActivatedRuleAction;
}
export interface AwsWafregionalRuleGroupArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  activated_rule: AwsWafregionalRuleGroupArgsActivatedRule;
}
export class aws_wafregional_rule_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalRuleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_rule_group");
  }
}