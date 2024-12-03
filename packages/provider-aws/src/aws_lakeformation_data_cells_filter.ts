import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLakeformationDataCellsFilterArgsTableDataColumnWildcard {
  excluded_column_names?: string[];
}
export interface AwsLakeformationDataCellsFilterArgsTableDataRowFilterAllRowsWildcard {}
export interface AwsLakeformationDataCellsFilterArgsTableDataRowFilter {
  all_rows_wildcard: AwsLakeformationDataCellsFilterArgsTableDataRowFilterAllRowsWildcard;
}
export interface AwsLakeformationDataCellsFilterArgsTableData {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
  column_wildcard: AwsLakeformationDataCellsFilterArgsTableDataColumnWildcard;
  row_filter: AwsLakeformationDataCellsFilterArgsTableDataRowFilter;
}
export interface AwsLakeformationDataCellsFilterArgsTimeouts {
  create?: string;
}
export interface AwsLakeformationDataCellsFilterArgs {
  table_data: AwsLakeformationDataCellsFilterArgsTableData;
  timeouts?: AwsLakeformationDataCellsFilterArgsTimeouts;
}
export class aws_lakeformation_data_cells_filter extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationDataCellsFilterArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_data_cells_filter");
  }
}