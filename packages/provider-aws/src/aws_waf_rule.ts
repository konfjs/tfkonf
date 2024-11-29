import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsWafRuleArgsPredicates {
  data_id: string;
  negated: boolean;
  type: string;
}
export interface AwsWafRuleArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  predicates: AwsWafRuleArgsPredicates;
}
export class aws_waf_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRuleArgs) {
    super(config, "resource", args, resourceName, "aws_waf_rule");
  }
}