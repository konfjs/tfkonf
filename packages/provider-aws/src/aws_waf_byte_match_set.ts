import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface ByteMatchTuples {
  positional_constraint: string;
  target_string?: string;
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafByteMatchSetArgs {
  name: string;
  byte_match_tuples: ByteMatchTuples;
}
export class aws_waf_byte_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafByteMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_byte_match_set");
  }
}