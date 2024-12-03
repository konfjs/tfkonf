import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsWafRegexPatternSetArgs {
  name: string;
  regex_pattern_strings?: string[];
}
export class aws_waf_regex_pattern_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRegexPatternSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_regex_pattern_set");
  }
}