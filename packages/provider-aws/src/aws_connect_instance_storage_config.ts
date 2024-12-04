import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectInstanceStorageConfigArgsStorageConfigKinesisFirehoseConfig {
  firehose_arn: string;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfigKinesisStreamConfig {
  stream_arn: string;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfigKinesisVideoStreamConfigEncryptionConfig {
  encryption_type: string;
  key_id: string;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfigKinesisVideoStreamConfig {
  prefix: string;
  retention_period_hours: number;
  encryption_config: AwsConnectInstanceStorageConfigArgsStorageConfigKinesisVideoStreamConfigEncryptionConfig;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfigS3ConfigEncryptionConfig {
  encryption_type: string;
  key_id: string;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfigS3Config {
  bucket_name: string;
  bucket_prefix: string;
  encryption_config: AwsConnectInstanceStorageConfigArgsStorageConfigS3ConfigEncryptionConfig;
}

export interface AwsConnectInstanceStorageConfigArgsStorageConfig {
  storage_type: string;
  kinesis_firehose_config: AwsConnectInstanceStorageConfigArgsStorageConfigKinesisFirehoseConfig;
  kinesis_stream_config: AwsConnectInstanceStorageConfigArgsStorageConfigKinesisStreamConfig;
  kinesis_video_stream_config: AwsConnectInstanceStorageConfigArgsStorageConfigKinesisVideoStreamConfig;
  s3_config: AwsConnectInstanceStorageConfigArgsStorageConfigS3Config;
}

export interface AwsConnectInstanceStorageConfigArgs {
  instance_id: string;
  resource_type: string;
  storage_config: AwsConnectInstanceStorageConfigArgsStorageConfig;
}

export class aws_connect_instance_storage_config extends TerraformResource {
  readonly association_id!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectInstanceStorageConfigArgs) {
    super(config, "resource", args, resourceName, "aws_connect_instance_storage_config");
  }
}
