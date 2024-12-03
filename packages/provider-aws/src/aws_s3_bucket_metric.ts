import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3BucketMetricArgsFilter {
  access_point?: string;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketMetricArgs {
  bucket: string;
  name: string;
  filter: AwsS3BucketMetricArgsFilter;
}
export class aws_s3_bucket_metric extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketMetricArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_metric");
  }
}