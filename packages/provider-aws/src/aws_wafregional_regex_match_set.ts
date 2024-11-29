import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface RegexMatchTuple {
  regex_pattern_set_id: string;
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafregionalRegexMatchSetArgs {
  name: string;
  regex_match_tuple: RegexMatchTuple;
}
export class aws_wafregional_regex_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalRegexMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_regex_match_set");
  }
}