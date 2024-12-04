import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCatalogDatabaseArgsCreateTableDefaultPermissionPrincipal {
  data_lake_principal_identifier?: string;
}

export interface AwsGlueCatalogDatabaseArgsCreateTableDefaultPermission {
  permissions?: string[];
  principal: AwsGlueCatalogDatabaseArgsCreateTableDefaultPermissionPrincipal;
}

export interface AwsGlueCatalogDatabaseArgsFederatedDatabase {
  connection_name?: string;
  identifier?: string;
}

export interface AwsGlueCatalogDatabaseArgsTargetDatabase {
  catalog_id: string;
  database_name: string;
  region?: string;
}

export interface AwsGlueCatalogDatabaseArgs {
  description?: string;
  name: string;
  parameters?: { [key: string]: string };
  tags?: { [key: string]: string };
  create_table_default_permission: AwsGlueCatalogDatabaseArgsCreateTableDefaultPermission;
  federated_database: AwsGlueCatalogDatabaseArgsFederatedDatabase;
  target_database: AwsGlueCatalogDatabaseArgsTargetDatabase;
}

export class aws_glue_catalog_database extends TerraformResource {
  readonly arn!: string;
  readonly catalog_id?: string;
  readonly id?: string;
  readonly location_uri?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCatalogDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_glue_catalog_database");
  }
}
