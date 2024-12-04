import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationResourceLfTagsArgsDatabase {
  name: string;
}

export interface AwsLakeformationResourceLfTagsArgsLfTag {
  key: string;
  value: string;
}

export interface AwsLakeformationResourceLfTagsArgsTable {
  database_name: string;
  wildcard?: boolean;
}

export interface AwsLakeformationResourceLfTagsArgsTableWithColumns {
  column_names?: string[];
  database_name: string;
  excluded_column_names?: string[];
  name: string;
  wildcard?: boolean;
}

export interface AwsLakeformationResourceLfTagsArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsLakeformationResourceLfTagsArgs {
  database: AwsLakeformationResourceLfTagsArgsDatabase;
  lf_tag: AwsLakeformationResourceLfTagsArgsLfTag;
  table: AwsLakeformationResourceLfTagsArgsTable;
  table_with_columns: AwsLakeformationResourceLfTagsArgsTableWithColumns;
  timeouts?: AwsLakeformationResourceLfTagsArgsTimeouts;
}

export class aws_lakeformation_resource_lf_tags extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource_lf_tags");
  }
}
