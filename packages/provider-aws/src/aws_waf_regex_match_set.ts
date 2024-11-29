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
export interface AwsWafRegexMatchSetArgs {
  name: string;
  regex_match_tuple: RegexMatchTuple;
}
export class aws_waf_regex_match_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafRegexMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_regex_match_set");
  }
}