import { TerraformConfig, TerraformResource } from "tfs";
export interface SseKms {
  key_id: string;
}
export interface SseS3 {}
export interface Encryption {
  sse_kms: SseKms;
  sse_s3: SseS3;
}
export interface Bucket {
  account_id?: string;
  bucket_arn: string;
  format: string;
  prefix?: string;
  encryption: Encryption;
}
export interface Destination {
  bucket: Bucket;
}
export interface Filter {
  prefix?: string;
}
export interface Schedule {
  frequency: string;
}
export interface AwsS3BucketInventoryArgs {
  bucket: string;
  enabled?: boolean;
  included_object_versions: string;
  name: string;
  optional_fields?: string[];
  destination: Destination;
  filter: Filter;
  schedule: Schedule;
}
export class aws_s3_bucket_inventory extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketInventoryArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_inventory");
  }
}