import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3BucketLoggingArgsTargetGrantGrantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}
export interface AwsS3BucketLoggingArgsTargetGrant {
  permission: string;
  grantee: AwsS3BucketLoggingArgsTargetGrantGrantee;
}
export interface AwsS3BucketLoggingArgsTargetObjectKeyFormatPartitionedPrefix {
  partition_date_source: string;
}
export interface AwsS3BucketLoggingArgsTargetObjectKeyFormatSimplePrefix {}
export interface AwsS3BucketLoggingArgsTargetObjectKeyFormat {
  partitioned_prefix: AwsS3BucketLoggingArgsTargetObjectKeyFormatPartitionedPrefix;
  simple_prefix: AwsS3BucketLoggingArgsTargetObjectKeyFormatSimplePrefix;
}
export interface AwsS3BucketLoggingArgs {
  bucket: string;
  expected_bucket_owner?: string;
  target_bucket: string;
  target_prefix: string;
  target_grant: AwsS3BucketLoggingArgsTargetGrant;
  target_object_key_format: AwsS3BucketLoggingArgsTargetObjectKeyFormat;
}
export class aws_s3_bucket_logging extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketLoggingArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_logging");
  }
}