import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLakeformationPermissionsArgsDataCellsFilter {
  database_name: string;
  name: string;
  table_catalog_id: string;
  table_name: string;
}
export interface AwsLakeformationPermissionsArgsDataLocation {
  arn: string;
}
export interface AwsLakeformationPermissionsArgsdatabase {
  name: string;
}
export interface AwsLakeformationPermissionsArgsLfTag {
  key: string;
  values: string[];
}
export interface AwsLakeformationPermissionsArgsLfTagPolicyexpression {
  key: string;
  values: string[];
}
export interface AwsLakeformationPermissionsArgsLfTagPolicy {
  resource_type: string;
  expression: AwsLakeformationPermissionsArgsLfTagPolicyexpression;
}
export interface AwsLakeformationPermissionsArgstable {
  database_name: string;
  wildcard?: boolean;
}
export interface AwsLakeformationPermissionsArgsTableWithColumns {
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
  data_cells_filter: AwsLakeformationPermissionsArgsDataCellsFilter;
  data_location: AwsLakeformationPermissionsArgsDataLocation;
  database: AwsLakeformationPermissionsArgsdatabase;
  lf_tag: AwsLakeformationPermissionsArgsLfTag;
  lf_tag_policy: AwsLakeformationPermissionsArgsLfTagPolicy;
  table: AwsLakeformationPermissionsArgstable;
  table_with_columns: AwsLakeformationPermissionsArgsTableWithColumns;
}
export class aws_lakeformation_permissions extends TerraformResource {
  readonly id?: string;
  readonly permissions_with_grant_option?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationPermissionsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_permissions");
  }
}