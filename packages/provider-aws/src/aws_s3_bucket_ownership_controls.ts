import { TerraformConfig, TerraformResource } from "tfs";
export interface Rule {
  object_ownership: string;
}
export interface AwsS3BucketOwnershipControlsArgs {
  bucket: string;
  rule: Rule;
}
export class aws_s3_bucket_ownership_controls extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketOwnershipControlsArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_ownership_controls");
  }
}