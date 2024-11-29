import { TerraformConfig, TerraformResource } from "tfs";
export interface Filter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface S3BucketDestination {
  bucket_account_id?: string;
  bucket_arn: string;
  format?: string;
  prefix?: string;
}
export interface Destination {
  s3_bucket_destination: S3BucketDestination;
}
export interface DataExport {
  output_schema_version?: string;
  destination: Destination;
}
export interface StorageClassAnalysis {
  data_export: DataExport;
}
export interface AwsS3BucketAnalyticsConfigurationArgs {
  bucket: string;
  name: string;
  filter: Filter;
  storage_class_analysis: StorageClassAnalysis;
}
export class aws_s3_bucket_analytics_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketAnalyticsConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_analytics_configuration");
  }
}