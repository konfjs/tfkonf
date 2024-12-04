import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalRateBasedRuleArgsPredicate {
  data_id: string;
  negated: boolean;
  type: string;
}

export interface AwsWafregionalRateBasedRuleArgs {
  metric_name: string;
  name: string;
  rate_key: string;
  rate_limit: number;
  tags?: { [key: string]: string };
  predicate: AwsWafregionalRateBasedRuleArgsPredicate;
}

export class aws_wafregional_rate_based_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalRateBasedRuleArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_rate_based_rule");
  }
}
