import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafByteMatchSetArgsByteMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafByteMatchSetArgsByteMatchTuples {
  positional_constraint: string;
  target_string?: string;
  text_transformation: string;
  field_to_match: AwsWafByteMatchSetArgsByteMatchTuplesFieldToMatch;
}
export interface AwsWafByteMatchSetArgs {
  name: string;
  byte_match_tuples: AwsWafByteMatchSetArgsByteMatchTuples;
}
export class aws_waf_byte_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafByteMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_byte_match_set");
  }
}