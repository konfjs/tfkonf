import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueCrawlerArgsCatalogTarget {
  connection_name?: string;
  database_name: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  tables: string[];
}

export interface AwsGlueCrawlerArgsDeltaTarget {
  connection_name?: string;
  create_native_delta_table?: boolean;
  delta_tables: string[];
  write_manifest: boolean;
}

export interface AwsGlueCrawlerArgsDynamodbTarget {
  path: string;
  scan_all?: boolean;
  scan_rate?: number;
}

export interface AwsGlueCrawlerArgsHudiTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}

export interface AwsGlueCrawlerArgsIcebergTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}

export interface AwsGlueCrawlerArgsJdbcTarget {
  connection_name: string;
  enable_additional_metadata?: string[];
  exclusions?: string[];
  path: string;
}

export interface AwsGlueCrawlerArgsLakeFormationConfiguration {
  use_lake_formation_credentials?: boolean;
}

export interface AwsGlueCrawlerArgsLineageConfiguration {
  crawler_lineage_settings?: string;
}

export interface AwsGlueCrawlerArgsMongodbTarget {
  connection_name: string;
  path: string;
  scan_all?: boolean;
}

export interface AwsGlueCrawlerArgsRecrawlPolicy {
  recrawl_behavior?: string;
}

export interface AwsGlueCrawlerArgsS3Target {
  connection_name?: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  exclusions?: string[];
  path: string;
  sample_size?: number;
}

export interface AwsGlueCrawlerArgsSchemaChangePolicy {
  delete_behavior?: string;
  update_behavior?: string;
}

export interface AwsGlueCrawlerArgs {
  classifiers?: string[];
  configuration?: string;
  database_name: string;
  description?: string;
  name: string;
  role: string;
  schedule?: string;
  security_configuration?: string;
  table_prefix?: string;
  tags?: { [key: string]: string };
  catalog_target: AwsGlueCrawlerArgsCatalogTarget;
  delta_target: AwsGlueCrawlerArgsDeltaTarget;
  dynamodb_target: AwsGlueCrawlerArgsDynamodbTarget;
  hudi_target: AwsGlueCrawlerArgsHudiTarget;
  iceberg_target: AwsGlueCrawlerArgsIcebergTarget;
  jdbc_target: AwsGlueCrawlerArgsJdbcTarget;
  lake_formation_configuration: AwsGlueCrawlerArgsLakeFormationConfiguration;
  lineage_configuration: AwsGlueCrawlerArgsLineageConfiguration;
  mongodb_target: AwsGlueCrawlerArgsMongodbTarget;
  recrawl_policy: AwsGlueCrawlerArgsRecrawlPolicy;
  s3_target: AwsGlueCrawlerArgsS3Target;
  schema_change_policy: AwsGlueCrawlerArgsSchemaChangePolicy;
}

export class aws_glue_crawler extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCrawlerArgs) {
    super(config, "resource", args, resourceName, "aws_glue_crawler");
  }
}
