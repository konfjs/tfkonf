import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCatalogTableOptimizerArgsConfiguration {
  enabled: boolean;
  role_arn: string;
}

export interface AwsGlueCatalogTableOptimizerArgs {
  catalog_id: string;
  database_name: string;
  table_name: string;
  type: string;
  configuration: AwsGlueCatalogTableOptimizerArgsConfiguration;
}

export class aws_glue_catalog_table_optimizer extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCatalogTableOptimizerArgs) {
    super(config, "resource", args, resourceName, "aws_glue_catalog_table_optimizer");
  }
}
