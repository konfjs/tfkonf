import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsWafRegexMatchSetArgsRegexMatchTupleFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafRegexMatchSetArgsRegexMatchTuple {
  regex_pattern_set_id: string;
  text_transformation: string;
  field_to_match: AwsWafRegexMatchSetArgsRegexMatchTupleFieldToMatch;
}
export interface AwsWafRegexMatchSetArgs {
  name: string;
  regex_match_tuple: AwsWafRegexMatchSetArgsRegexMatchTuple;
}
export class aws_waf_regex_match_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRegexMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_regex_match_set");
  }
}