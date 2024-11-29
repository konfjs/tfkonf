import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Configuration {
  bucket_name?: string;
  encryption_option?: string;
  kms_key_id?: string;
  object_key_prefix?: string;
}
export interface MagneticStoreRejectedDataLocation {
  s3_configuration: S3Configuration;
}
export interface MagneticStoreWriteProperties {
  enable_magnetic_store_writes?: boolean;
  magnetic_store_rejected_data_location: MagneticStoreRejectedDataLocation;
}
export interface RetentionProperties {
  magnetic_store_retention_period_in_days: number;
  memory_store_retention_period_in_hours: number;
}
export interface CompositePartitionKey {
  enforcement_in_record?: string;
  name?: string;
  type: string;
}
export interface Schema {
  composite_partition_key: CompositePartitionKey;
}
export interface AwsTimestreamwriteTableArgs {
  database_name: string;
  table_name: string;
  tags?: {
    [key: string]: string;
  };
  magnetic_store_write_properties: MagneticStoreWriteProperties;
  retention_properties: RetentionProperties;
  schema: Schema;
}
export class aws_timestreamwrite_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTimestreamwriteTableArgs) {
    super(config, "resource", args, resourceName, "aws_timestreamwrite_table");
  }
}