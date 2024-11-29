import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface XssMatchTuples {
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafXssMatchSetArgs {
  name: string;
  xss_match_tuples: XssMatchTuples;
}
export class aws_waf_xss_match_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafXssMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_xss_match_set");
  }
}