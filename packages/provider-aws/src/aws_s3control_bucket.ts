import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3controlBucketArgs {
  bucket: string;
  outpost_id: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_s3control_bucket extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly id?: string;
  readonly public_access_block_enabled!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlBucketArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_bucket");
  }
}