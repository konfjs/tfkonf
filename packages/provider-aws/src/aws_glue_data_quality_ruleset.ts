import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueDataQualityRulesetArgsTargetTable {
  catalog_id?: string;
  database_name: string;
  table_name: string;
}

export interface AwsGlueDataQualityRulesetArgs {
  description?: string;
  name: string;
  ruleset: string;
  tags?: { [key: string]: string };
  target_table: AwsGlueDataQualityRulesetArgsTargetTable;
}

export class aws_glue_data_quality_ruleset extends TerraformResource {
  readonly arn!: string;
  readonly created_on!: string;
  readonly id?: string;
  readonly last_modified_on!: string;
  readonly recommendation_run_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueDataQualityRulesetArgs) {
    super(config, "resource", args, resourceName, "aws_glue_data_quality_ruleset");
  }
}
