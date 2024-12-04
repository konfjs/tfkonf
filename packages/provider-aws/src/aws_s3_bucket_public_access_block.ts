import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketPublicAccessBlockArgs {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  bucket: string;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}

export class aws_s3_bucket_public_access_block extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketPublicAccessBlockArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_public_access_block");
  }
}
