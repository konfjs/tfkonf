import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketAnalyticsConfigurationArgsFilter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExportDestinationS3BucketDestination {
  bucket_account_id?: string;
  bucket_arn: string;
  format?: string;
  prefix?: string;
}
export interface AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExportDestination {
  s3_bucket_destination: AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExportDestinationS3BucketDestination;
}
export interface AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExport {
  output_schema_version?: string;
  destination: AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExportDestination;
}
export interface AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysis {
  data_export: AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysisDataExport;
}
export interface AwsS3BucketAnalyticsConfigurationArgs {
  bucket: string;
  name: string;
  filter: AwsS3BucketAnalyticsConfigurationArgsFilter;
  storage_class_analysis: AwsS3BucketAnalyticsConfigurationArgsStorageClassAnalysis;
}
export class aws_s3_bucket_analytics_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketAnalyticsConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_analytics_configuration");
  }
}