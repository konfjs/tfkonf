import { TerraformConfig, TerraformResource } from "tfs";
export interface CatalogTarget {
  connection_name?: string;
  database_name: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  tables: string[];
}
export interface DeltaTarget {
  connection_name?: string;
  create_native_delta_table?: boolean;
  delta_tables: string[];
  write_manifest: boolean;
}
export interface DynamodbTarget {
  path: string;
  scan_all?: boolean;
  scan_rate?: number;
}
export interface HudiTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}
export interface IcebergTarget {
  connection_name?: string;
  exclusions?: string[];
  maximum_traversal_depth: number;
  paths: string[];
}
export interface JdbcTarget {
  connection_name: string;
  enable_additional_metadata?: string[];
  exclusions?: string[];
  path: string;
}
export interface LakeFormationConfiguration {
  use_lake_formation_credentials?: boolean;
}
export interface LineageConfiguration {
  crawler_lineage_settings?: string;
}
export interface MongodbTarget {
  connection_name: string;
  path: string;
  scan_all?: boolean;
}
export interface RecrawlPolicy {
  recrawl_behavior?: string;
}
export interface S3Target {
  connection_name?: string;
  dlq_event_queue_arn?: string;
  event_queue_arn?: string;
  exclusions?: string[];
  path: string;
  sample_size?: number;
}
export interface SchemaChangePolicy {
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
  tags?: {
    [key: string]: string;
  };
  catalog_target: CatalogTarget;
  delta_target: DeltaTarget;
  dynamodb_target: DynamodbTarget;
  hudi_target: HudiTarget;
  iceberg_target: IcebergTarget;
  jdbc_target: JdbcTarget;
  lake_formation_configuration: LakeFormationConfiguration;
  lineage_configuration: LineageConfiguration;
  mongodb_target: MongodbTarget;
  recrawl_policy: RecrawlPolicy;
  s3_target: S3Target;
  schema_change_policy: SchemaChangePolicy;
}
export class aws_glue_crawler extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueCrawlerArgs) {
    super(config, "resource", args, resourceName, "aws_glue_crawler");
  }
}