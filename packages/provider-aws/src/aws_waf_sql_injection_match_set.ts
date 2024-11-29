import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface SqlInjectionMatchTuples {
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafSqlInjectionMatchSetArgs {
  name: string;
  sql_injection_match_tuples: SqlInjectionMatchTuples;
}
export class aws_waf_sql_injection_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafSqlInjectionMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_sql_injection_match_set");
  }
}