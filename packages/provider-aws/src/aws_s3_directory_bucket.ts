import { TerraformConfig, TerraformResource } from "tfs";
export interface Location {
  name: string;
}
export interface AwsS3DirectoryBucketArgs {
  bucket: string;
  location: Location;
}
export class aws_s3_directory_bucket extends TerraformResource {
  readonly arn!: string;
  readonly data_redundancy?: string;
  readonly force_destroy?: boolean;
  readonly id!: string;
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3DirectoryBucketArgs) {
    super(config, "resource", args, resourceName, "aws_s3_directory_bucket");
  }
}