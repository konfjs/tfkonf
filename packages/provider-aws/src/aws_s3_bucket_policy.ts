import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketPolicyArgs {
  bucket: string;
  policy: string;
}

export class aws_s3_bucket_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_policy");
  }
}
