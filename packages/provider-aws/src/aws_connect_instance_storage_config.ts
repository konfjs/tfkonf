import { TerraformConfig, TerraformResource } from "tfs";
export interface KinesisFirehoseConfig {
  firehose_arn: string;
}
export interface KinesisStreamConfig {
  stream_arn: string;
}
export interface EncryptionConfig {
  encryption_type: string;
  key_id: string;
}
export interface KinesisVideoStreamConfig {
  prefix: string;
  retention_period_hours: number;
  encryption_config: EncryptionConfig;
}
export interface EncryptionConfig {
  encryption_type: string;
  key_id: string;
}
export interface S3Config {
  bucket_name: string;
  bucket_prefix: string;
  encryption_config: EncryptionConfig;
}
export interface StorageConfig {
  storage_type: string;
  kinesis_firehose_config: KinesisFirehoseConfig;
  kinesis_stream_config: KinesisStreamConfig;
  kinesis_video_stream_config: KinesisVideoStreamConfig;
  s3_config: S3Config;
}
export interface AwsConnectInstanceStorageConfigArgs {
  instance_id: string;
  resource_type: string;
  storage_config: StorageConfig;
}
export class aws_connect_instance_storage_config extends TerraformResource {
  readonly association_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectInstanceStorageConfigArgs) {
    super(config, "resource", args, resourceName, "aws_connect_instance_storage_config");
  }
}