import { TerraformConfig, TerraformResource } from "tfs";
export interface DataCellsFilter {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
}
export interface DataLocation {
  arn: string;
}
export interface Database {
  name: string;
}
export interface LfTag {
  key: string;
  values: string[];
}
export interface Expression {
  key: string;
  values: string[];
}
export interface LfTagPolicy {
  resource_type: string;
  expression: Expression;
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
export interface AwsLakeformationPermissionsArgs {
  catalog_id?: string;
  catalog_resource?: boolean;
  permissions: string[];
  principal: string;
  data_cells_filter: DataCellsFilter;
  data_location: DataLocation;
  database: Database;
  lf_tag: LfTag;
  lf_tag_policy: LfTagPolicy;
  table: Table;
  table_with_columns: TableWithColumns;
}
export class aws_lakeformation_permissions extends TerraformResource {
  readonly id?: string;
  readonly permissions_with_grant_option?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationPermissionsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_permissions");
  }
}