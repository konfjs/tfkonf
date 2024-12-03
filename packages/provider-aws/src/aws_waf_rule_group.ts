import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsWafRuleGroupArgsActivatedRuleAction {
  type: string;
}
export interface AwsWafRuleGroupArgsActivatedRule {
  priority: number;
  rule_id: string;
  type?: string;
  action: AwsWafRuleGroupArgsActivatedRuleAction;
}
export interface AwsWafRuleGroupArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  activated_rule: AwsWafRuleGroupArgsActivatedRule;
}
export class aws_waf_rule_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRuleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_waf_rule_group");
  }
}