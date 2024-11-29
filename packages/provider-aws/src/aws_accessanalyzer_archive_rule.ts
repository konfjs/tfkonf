import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAccessanalyzerArchiveRuleArgsFilter {
  criteria: string;
}
export interface AwsAccessanalyzerArchiveRuleArgs {
  analyzer_name: string;
  rule_name: string;
  filter: AwsAccessanalyzerArchiveRuleArgsFilter;
}
export class aws_accessanalyzer_archive_rule extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccessanalyzerArchiveRuleArgs) {
    super(config, "resource", args, resourceName, "aws_accessanalyzer_archive_rule");
  }
}