import { TerraformConfig, TerraformResource } from "tfs";
export interface Database {
  catalog_id?: string;
  name: string;
}
export interface LfTag {
  key: string;
  value: string;
}
export interface Table {
  catalog_id?: string;
  database_name: string;
  name?: string;
  wildcard?: boolean;
}
export interface ColumnWildcard {
  excluded_column_names?: string[];
}
export interface TableWithColumns {
  catalog_id?: string;
  column_names?: string[];
  database_name: string;
  name: string;
  column_wildcard: ColumnWildcard;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsLakeformationResourceLfTagArgs {
  catalog_id?: string;
  database: Database;
  lf_tag: LfTag;
  table: Table;
  table_with_columns: TableWithColumns;
  timeouts: Timeouts;
}
export class aws_lakeformation_resource_lf_tag extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource_lf_tag");
  }
}