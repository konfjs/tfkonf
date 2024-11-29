import { TerraformConfig, TerraformResource } from "tfs";
export interface VersioningConfiguration {
  status: string;
}
export interface AwsS3BucketVersioningArgs {
  bucket: string;
  expected_bucket_owner?: string;
  mfa?: string;
  versioning_configuration: VersioningConfiguration;
}
export class aws_s3_bucket_versioning extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketVersioningArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_versioning");
  }
}