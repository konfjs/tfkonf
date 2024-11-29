import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLakeformationResourceLfTagsArgsdatabase {
  name: string;
}
export interface AwsLakeformationResourceLfTagsArgsLfTag {
  key: string;
  value: string;
}
export interface AwsLakeformationResourceLfTagsArgstable {
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
export interface AwsLakeformationResourceLfTagsArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsLakeformationResourceLfTagsArgs {
  database: AwsLakeformationResourceLfTagsArgsdatabase;
  lf_tag: AwsLakeformationResourceLfTagsArgsLfTag;
  table: AwsLakeformationResourceLfTagsArgstable;
  table_with_columns: AwsLakeformationResourceLfTagsArgsTableWithColumns;
  timeouts: AwsLakeformationResourceLfTagsArgstimeouts;
}
export class aws_lakeformation_resource_lf_tags extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource_lf_tags");
  }
}