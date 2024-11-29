import { TerraformConfig, TerraformResource } from "tfs";
export interface RegularExpression {
  regex_string: string;
}
export interface AwsWafv2RegexPatternSetArgs {
  description?: string;
  name: string;
  scope: string;
  tags?: {
    [key: string]: string;
  };
  regular_expression: RegularExpression;
}
export class aws_wafv2_regex_pattern_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly lock_token!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2RegexPatternSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_regex_pattern_set");
  }
}