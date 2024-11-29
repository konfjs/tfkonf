import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLakeformationResourceLfTagArgsDatabase {
  catalog_id?: string;
  name: string;
}
export interface AwsLakeformationResourceLfTagArgsLfTag {
  key: string;
  value: string;
}
export interface AwsLakeformationResourceLfTagArgsTable {
  catalog_id?: string;
  database_name: string;
  name?: string;
  wildcard?: boolean;
}
export interface AwsLakeformationResourceLfTagArgsTableWithColumnsColumnWildcard {
  excluded_column_names?: string[];
}
export interface AwsLakeformationResourceLfTagArgsTableWithColumns {
  catalog_id?: string;
  column_names?: string[];
  database_name: string;
  name: string;
  column_wildcard: AwsLakeformationResourceLfTagArgsTableWithColumnsColumnWildcard;
}
export interface AwsLakeformationResourceLfTagArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsLakeformationResourceLfTagArgs {
  catalog_id?: string;
  database: AwsLakeformationResourceLfTagArgsDatabase;
  lf_tag: AwsLakeformationResourceLfTagArgsLfTag;
  table: AwsLakeformationResourceLfTagArgsTable;
  table_with_columns: AwsLakeformationResourceLfTagArgsTableWithColumns;
  timeouts?: AwsLakeformationResourceLfTagArgsTimeouts;
}
export class aws_lakeformation_resource_lf_tag extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationResourceLfTagArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_resource_lf_tag");
  }
}