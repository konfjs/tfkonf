import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalXssMatchSetArgsXssMatchTupleFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalXssMatchSetArgsXssMatchTuple {
  text_transformation: string;
  field_to_match: AwsWafregionalXssMatchSetArgsXssMatchTupleFieldToMatch;
}

export interface AwsWafregionalXssMatchSetArgs {
  name: string;
  xss_match_tuple: AwsWafregionalXssMatchSetArgsXssMatchTuple;
}

export class aws_wafregional_xss_match_set extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalXssMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_xss_match_set");
  }
}
