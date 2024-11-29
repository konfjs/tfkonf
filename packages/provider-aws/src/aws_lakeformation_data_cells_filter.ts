import { TerraformConfig, TerraformResource } from "tfs";
export interface ColumnWildcard {
  excluded_column_names?: string[];
}
export interface AllRowsWildcard {}
export interface RowFilter {
  all_rows_wildcard: AllRowsWildcard;
}
export interface TableData {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
  column_wildcard: ColumnWildcard;
  row_filter: RowFilter;
}
export interface Timeouts {
  create?: string;
}
export interface AwsLakeformationDataCellsFilterArgs {
  table_data: TableData;
  timeouts: Timeouts;
}
export class aws_lakeformation_data_cells_filter extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationDataCellsFilterArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_data_cells_filter");
  }
}