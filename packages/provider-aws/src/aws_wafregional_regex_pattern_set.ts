import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafregionalRegexPatternSetArgs {
  name: string;
  regex_pattern_strings?: string[];
}
export class aws_wafregional_regex_pattern_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalRegexPatternSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_regex_pattern_set");
  }
}