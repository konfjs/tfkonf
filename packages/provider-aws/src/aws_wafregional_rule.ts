import { TerraformConfig, TerraformResource } from "tfs";
export interface Predicate {
  data_id: string;
  negated: boolean;
  type: string;
}
export interface AwsWafregionalRuleArgs {
  metric_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  predicate: Predicate;
}
export class aws_wafregional_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalRuleArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_rule");
  }
}