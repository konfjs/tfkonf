import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface SqlInjectionMatchTuple {
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafregionalSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuple: SqlInjectionMatchTuple;
}
export class aws_wafregional_sql_injection_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalSqlInjectionMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_sql_injection_match_set");
  }
}