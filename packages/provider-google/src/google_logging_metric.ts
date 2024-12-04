import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingMetricArgsBucketOptionsExplicitBuckets {
  bounds: number[];
}

export interface GoogleLoggingMetricArgsBucketOptionsExponentialBuckets {
  growth_factor: number;
  num_finite_buckets: number;
  scale: number;
}

export interface GoogleLoggingMetricArgsBucketOptionsLinearBuckets {
  num_finite_buckets: number;
  offset: number;
  width: number;
}

export interface GoogleLoggingMetricArgsBucketOptions {
  explicit_buckets: GoogleLoggingMetricArgsBucketOptionsExplicitBuckets;
  exponential_buckets: GoogleLoggingMetricArgsBucketOptionsExponentialBuckets;
  linear_buckets: GoogleLoggingMetricArgsBucketOptionsLinearBuckets;
}

export interface GoogleLoggingMetricArgsMetricDescriptorLabels {
  description?: string;
  key: string;
  value_type?: string;
}

export interface GoogleLoggingMetricArgsMetricDescriptor {
  display_name?: string;
  metric_kind: string;
  unit?: string;
  value_type: string;
  labels: GoogleLoggingMetricArgsMetricDescriptorLabels;
}

export interface GoogleLoggingMetricArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLoggingMetricArgs {
  bucket_name?: string;
  description?: string;
  disabled?: boolean;
  filter: string;
  label_extractors?: { [key: string]: string };
  name: string;
  value_extractor?: string;
  bucket_options: GoogleLoggingMetricArgsBucketOptions;
  metric_descriptor: GoogleLoggingMetricArgsMetricDescriptor;
  timeouts?: GoogleLoggingMetricArgsTimeouts;
}

export class google_logging_metric extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingMetricArgs) {
    super(config, "resource", args, resourceName, "google_logging_metric");
  }
}
