import { TerraformConfig, TerraformResource } from "tfs";
export interface Filter {
  access_point?: string;
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketMetricArgs {
  bucket: string;
  name: string;
  filter: Filter;
}
export class aws_s3_bucket_metric extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketMetricArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_metric");
  }
}