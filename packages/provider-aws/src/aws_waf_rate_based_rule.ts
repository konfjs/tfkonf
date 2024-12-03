import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsWafRateBasedRuleArgsPredicates {
  data_id: string;
  negated: boolean;
  type: string;
}
export interface AwsWafRateBasedRuleArgs {
  metric_name: string;
  name: string;
  rate_key: string;
  rate_limit: number;
  tags?: {
    [key: string]: string;
  };
  predicates: AwsWafRateBasedRuleArgsPredicates;
}
export class aws_waf_rate_based_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRateBasedRuleArgs) {
    super(config, "resource", args, resourceName, "aws_waf_rate_based_rule");
  }
}