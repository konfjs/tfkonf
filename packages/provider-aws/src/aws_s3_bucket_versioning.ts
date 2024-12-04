import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketVersioningArgsVersioningConfiguration {
  status: string;
}

export interface AwsS3BucketVersioningArgs {
  bucket: string;
  expected_bucket_owner?: string;
  mfa?: string;
  versioning_configuration: AwsS3BucketVersioningArgsVersioningConfiguration;
}

export class aws_s3_bucket_versioning extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketVersioningArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_versioning");
  }
}
