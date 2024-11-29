import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3controlBucketPolicyArgs {
  bucket: string;
  policy: string;
}
export class aws_s3control_bucket_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlBucketPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_bucket_policy");
  }
}