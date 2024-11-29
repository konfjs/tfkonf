import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface XssMatchTuple {
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafregionalXssMatchSetArgs {
  name: string;
  xss_match_tuple: XssMatchTuple;
}
export class aws_wafregional_xss_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalXssMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_xss_match_set");
  }
}