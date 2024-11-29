import { TerraformConfig, TerraformResource } from "tfs";
export interface Grantee {
  email_address?: string;
  id?: string;
  type: string;
  uri?: string;
}
export interface TargetGrant {
  permission: string;
  grantee: Grantee;
}
export interface PartitionedPrefix {
  partition_date_source: string;
}
export interface SimplePrefix {}
export interface TargetObjectKeyFormat {
  partitioned_prefix: PartitionedPrefix;
  simple_prefix: SimplePrefix;
}
export interface AwsS3BucketLoggingArgs {
  bucket: string;
  expected_bucket_owner?: string;
  target_bucket: string;
  target_prefix: string;
  target_grant: TargetGrant;
  target_object_key_format: TargetObjectKeyFormat;
}
export class aws_s3_bucket_logging extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketLoggingArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_logging");
  }
}