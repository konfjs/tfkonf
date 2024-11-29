import { TerraformConfig, TerraformResource } from "tfs";
export interface ActivityMetrics {
  enabled?: boolean;
}
export interface AdvancedCostOptimizationMetrics {
  enabled?: boolean;
}
export interface AdvancedDataProtectionMetrics {
  enabled?: boolean;
}
export interface ActivityMetrics {
  enabled?: boolean;
}
export interface AdvancedCostOptimizationMetrics {
  enabled?: boolean;
}
export interface AdvancedDataProtectionMetrics {
  enabled?: boolean;
}
export interface DetailedStatusCodeMetrics {
  enabled?: boolean;
}
export interface SelectionCriteria {
  delimiter?: string;
  max_depth?: number;
  min_storage_bytes_percentage?: number;
}
export interface StorageMetrics {
  enabled?: boolean;
  selection_criteria: SelectionCriteria;
}
export interface PrefixLevel {
  storage_metrics: StorageMetrics;
}
export interface BucketLevel {
  activity_metrics: ActivityMetrics;
  advanced_cost_optimization_metrics: AdvancedCostOptimizationMetrics;
  advanced_data_protection_metrics: AdvancedDataProtectionMetrics;
  detailed_status_code_metrics: DetailedStatusCodeMetrics;
  prefix_level: PrefixLevel;
}
export interface DetailedStatusCodeMetrics {
  enabled?: boolean;
}
export interface AccountLevel {
  activity_metrics: ActivityMetrics;
  advanced_cost_optimization_metrics: AdvancedCostOptimizationMetrics;
  advanced_data_protection_metrics: AdvancedDataProtectionMetrics;
  bucket_level: BucketLevel;
  detailed_status_code_metrics: DetailedStatusCodeMetrics;
}
export interface AwsOrg {
  arn: string;
}
export interface CloudWatchMetrics {
  enabled: boolean;
}
export interface SseKms {
  key_id: string;
}
export interface SseS3 {}
export interface Encryption {
  sse_kms: SseKms;
  sse_s3: SseS3;
}
export interface S3BucketDestination {
  account_id: string;
  arn: string;
  format: string;
  output_schema_version: string;
  prefix?: string;
  encryption: Encryption;
}
export interface DataExport {
  cloud_watch_metrics: CloudWatchMetrics;
  s3_bucket_destination: S3BucketDestination;
}
export interface Exclude {
  buckets?: string[];
  regions?: string[];
}
export interface Include {
  buckets?: string[];
  regions?: string[];
}
export interface StorageLensConfiguration {
  enabled: boolean;
  account_level: AccountLevel;
  aws_org: AwsOrg;
  data_export: DataExport;
  exclude: Exclude;
  include: Include;
}
export interface AwsS3controlStorageLensConfigurationArgs {
  config_id: string;
  tags?: {
    [key: string]: string;
  };
  storage_lens_configuration: StorageLensConfiguration;
}
export class aws_s3control_storage_lens_configuration extends TerraformResource {
  readonly account_id?: string;
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlStorageLensConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_storage_lens_configuration");
  }
}