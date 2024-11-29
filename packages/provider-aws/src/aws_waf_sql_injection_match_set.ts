import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuplesFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples {
  text_transformation: string;
  field_to_match: AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuplesFieldToMatch;
}
export interface AwsWafSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuples: AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples;
}
export class aws_waf_sql_injection_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafSqlInjectionMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_sql_injection_match_set");
  }
}