import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3BucketInventoryArgsdestinationbucketencryptionSseKms {
  key_id: string;
}
export interface AwsS3BucketInventoryArgsdestinationbucketencryptionSseS3 {}
export interface AwsS3BucketInventoryArgsdestinationbucketencryption {
  sse_kms: AwsS3BucketInventoryArgsdestinationbucketencryptionSseKms;
  sse_s3: AwsS3BucketInventoryArgsdestinationbucketencryptionSseS3;
}
export interface AwsS3BucketInventoryArgsdestinationbucket {
  account_id?: string;
  bucket_arn: string;
  format: string;
  prefix?: string;
  encryption: AwsS3BucketInventoryArgsdestinationbucketencryption;
}
export interface AwsS3BucketInventoryArgsdestination {
  bucket: AwsS3BucketInventoryArgsdestinationbucket;
}
export interface AwsS3BucketInventoryArgsfilter {
  prefix?: string;
}
export interface AwsS3BucketInventoryArgsschedule {
  frequency: string;
}
export interface AwsS3BucketInventoryArgs {
  bucket: string;
  enabled?: boolean;
  included_object_versions: string;
  name: string;
  optional_fields?: string[];
  destination: AwsS3BucketInventoryArgsdestination;
  filter: AwsS3BucketInventoryArgsfilter;
  schedule: AwsS3BucketInventoryArgsschedule;
}
export class aws_s3_bucket_inventory extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketInventoryArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_inventory");
  }
}