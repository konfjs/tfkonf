import { TerraformConfig, TerraformResource } from "tfs";
export interface Database {
  name: string;
}
export interface LfTag {
  key: string;
  value: string;
}
export interface Table {
  database_name: string;
  wildcard?: boolean;
}
export interface TableWithColumns {
  column_names?: string[];
  database_name: string;
  excluded_column_names?: string[];
  name: string;
  wildcard?: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsLakeformationResourceLfTagsArgs {
  database: Database;
  lf_tag: LfTag;
  table: Table;
  table_with_columns: TableWithColumns;
  timeouts: Timeouts;
}
export class aws_lakeformation_resource_lf_tags extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource_lf_tags");
  }
}