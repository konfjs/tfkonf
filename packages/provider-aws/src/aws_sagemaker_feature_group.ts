import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfigVectorConfig {
  dimension?: number;
}
export interface AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfig {
  vector_config: AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfigVectorConfig;
}
export interface AwsSagemakerFeatureGroupArgsFeatureDefinition {
  collection_type?: string;
  feature_name?: string;
  feature_type?: string;
  collection_config: AwsSagemakerFeatureGroupArgsFeatureDefinitionCollectionConfig;
}
export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfigDataCatalogConfig {}
export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfigS3StorageConfig {
  kms_key_id?: string;
  s3_uri: string;
}
export interface AwsSagemakerFeatureGroupArgsOfflineStoreConfig {
  disable_glue_table_creation?: boolean;
  table_format?: string;
  data_catalog_config: AwsSagemakerFeatureGroupArgsOfflineStoreConfigDataCatalogConfig;
  s3_storage_config: AwsSagemakerFeatureGroupArgsOfflineStoreConfigS3StorageConfig;
}
export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfigSecurityConfig {
  kms_key_id?: string;
}
export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfigTtlDuration {
  unit?: string;
  value?: number;
}
export interface AwsSagemakerFeatureGroupArgsOnlineStoreConfig {
  enable_online_store?: boolean;
  storage_type?: string;
  security_config: AwsSagemakerFeatureGroupArgsOnlineStoreConfigSecurityConfig;
  ttl_duration: AwsSagemakerFeatureGroupArgsOnlineStoreConfigTtlDuration;
}
export interface AwsSagemakerFeatureGroupArgsThroughputConfig {
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
  feature_definition: AwsSagemakerFeatureGroupArgsFeatureDefinition;
  offline_store_config: AwsSagemakerFeatureGroupArgsOfflineStoreConfig;
  online_store_config: AwsSagemakerFeatureGroupArgsOnlineStoreConfig;
  throughput_config: AwsSagemakerFeatureGroupArgsThroughputConfig;
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