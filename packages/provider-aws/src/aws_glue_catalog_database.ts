import { TerraformConfig, TerraformResource } from "tfs";
export interface Principal {
  data_lake_principal_identifier?: string;
}
export interface CreateTableDefaultPermission {
  permissions?: string[];
  principal: Principal;
}
export interface FederatedDatabase {
  connection_name?: string;
  identifier?: string;
}
export interface TargetDatabase {
  catalog_id: string;
  database_name: string;
  region?: string;
}
export interface AwsGlueCatalogDatabaseArgs {
  description?: string;
  name: string;
  parameters?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  create_table_default_permission: CreateTableDefaultPermission;
  federated_database: FederatedDatabase;
  target_database: TargetDatabase;
}
export class aws_glue_catalog_database extends TerraformResource {
  readonly arn!: string;
  readonly catalog_id?: string;
  readonly id?: string;
  readonly location_uri?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCatalogDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_glue_catalog_database");
  }
}