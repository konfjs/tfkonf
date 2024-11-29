import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLakeformationDataLakeSettingsArgsCreateDatabaseDefaultPermissions {}
export interface AwsLakeformationDataLakeSettingsArgsCreateTableDefaultPermissions {}
export interface AwsLakeformationDataLakeSettingsArgs {
  allow_external_data_filtering?: boolean;
  allow_full_table_external_data_access?: boolean;
  catalog_id?: string;
  create_database_default_permissions: AwsLakeformationDataLakeSettingsArgsCreateDatabaseDefaultPermissions;
  create_table_default_permissions: AwsLakeformationDataLakeSettingsArgsCreateTableDefaultPermissions;
}
export class aws_lakeformation_data_lake_settings extends TerraformResource {
  readonly admins?: string[];
  readonly authorized_session_tag_value_list?: string[];
  readonly external_data_filtering_allow_list?: string[];
  readonly id?: string;
  readonly parameters?: {
    [key: string]: string;
  };
  readonly read_only_admins?: string[];
  readonly trusted_resource_owners?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsLakeformationDataLakeSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_lakeformation_data_lake_settings");
  }
}