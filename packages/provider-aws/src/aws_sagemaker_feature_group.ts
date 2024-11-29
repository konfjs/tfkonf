import { TerraformConfig, TerraformResource } from "tfs";
export interface VectorConfig {
  dimension?: number;
}
export interface CollectionConfig {
  vector_config: VectorConfig;
}
export interface FeatureDefinition {
  collection_type?: string;
  feature_name?: string;
  feature_type?: string;
  collection_config: CollectionConfig;
}
export interface DataCatalogConfig {}
export interface S3StorageConfig {
  kms_key_id?: string;
  s3_uri: string;
}
export interface OfflineStoreConfig {
  disable_glue_table_creation?: boolean;
  table_format?: string;
  data_catalog_config: DataCatalogConfig;
  s3_storage_config: S3StorageConfig;
}
export interface SecurityConfig {
  kms_key_id?: string;
}
export interface TtlDuration {
  unit?: string;
  value?: number;
}
export interface OnlineStoreConfig {
  enable_online_store?: boolean;
  storage_type?: string;
  security_config: SecurityConfig;
  ttl_duration: TtlDuration;
}
export interface ThroughputConfig {
  provisioned_read_capacity_units?: number;
  provisioned_write_capacity_units?: number;
}
export interface AwsSagemakerFeatureGroupArgs {
  description?: string;
  event_time_feature_name: string;
  feature_group_name: string;
  record_identifier_feature_name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  feature_definition: FeatureDefinition;
  offline_store_config: OfflineStoreConfig;
  online_store_config: OnlineStoreConfig;
  throughput_config: ThroughputConfig;
}
export class aws_sagemaker_feature_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerFeatureGroupArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_feature_group");
  }
}