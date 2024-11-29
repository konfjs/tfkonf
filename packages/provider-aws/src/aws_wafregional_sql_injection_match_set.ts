import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTupleFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTuple {
  text_transformation: string;
  field_to_match: AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTupleFieldToMatch;
}
export interface AwsWafregionalSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuple: AwsWafregionalSqlInjectionMatchSetArgsSqlInjectionMatchTuple;
}
export class aws_wafregional_sql_injection_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalSqlInjectionMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_sql_injection_match_set");
  }
}