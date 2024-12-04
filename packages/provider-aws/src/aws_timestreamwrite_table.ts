import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
  bucket_name?: string;
  encryption_option?: string;
  kms_key_id?: string;
  object_key_prefix?: string;
}

export interface AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
  s3_configuration: AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}

export interface AwsTimestreamwriteTableArgsMagneticStoreWriteProperties {
  enable_magnetic_store_writes?: boolean;
  magnetic_store_rejected_data_location: AwsTimestreamwriteTableArgsMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
}

export interface AwsTimestreamwriteTableArgsRetentionProperties {
  magnetic_store_retention_period_in_days: number;
  memory_store_retention_period_in_hours: number;
}

export interface AwsTimestreamwriteTableArgsSchemaCompositePartitionKey {
  enforcement_in_record?: string;
  name?: string;
  type: string;
}

export interface AwsTimestreamwriteTableArgsSchema {
  composite_partition_key: AwsTimestreamwriteTableArgsSchemaCompositePartitionKey;
}

export interface AwsTimestreamwriteTableArgs {
  database_name: string;
  table_name: string;
  tags?: { [key: string]: string };
  magnetic_store_write_properties: AwsTimestreamwriteTableArgsMagneticStoreWriteProperties;
  retention_properties: AwsTimestreamwriteTableArgsRetentionProperties;
  schema: AwsTimestreamwriteTableArgsSchema;
}

export class aws_timestreamwrite_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsTimestreamwriteTableArgs) {
    super(config, "resource", args, resourceName, "aws_timestreamwrite_table");
  }
}
