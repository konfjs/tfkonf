import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3BucketAccelerateConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  status: string;
}
export class aws_s3_bucket_accelerate_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketAccelerateConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_accelerate_configuration");
  }
}