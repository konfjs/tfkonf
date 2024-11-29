import { TerraformConfig, TerraformResource } from "tfs";
export interface ExplicitBuckets {
  bounds: number[];
}
export interface ExponentialBuckets {
  growth_factor: number;
  num_finite_buckets: number;
  scale: number;
}
export interface LinearBuckets {
  num_finite_buckets: number;
  offset: number;
  width: number;
}
export interface BucketOptions {
  explicit_buckets: ExplicitBuckets;
  exponential_buckets: ExponentialBuckets;
  linear_buckets: LinearBuckets;
}
export interface Labels {
  description?: string;
  key: string;
  value_type?: string;
}
export interface MetricDescriptor {
  display_name?: string;
  metric_kind: string;
  unit?: string;
  value_type: string;
  labels: Labels;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleLoggingMetricArgs {
  bucket_name?: string;
  description?: string;
  disabled?: boolean;
  filter: string;
  label_extractors?: {
    [key: string]: string;
  };
  name: string;
  value_extractor?: string;
  bucket_options: BucketOptions;
  metric_descriptor: MetricDescriptor;
  timeouts: Timeouts;
}
export class google_logging_metric extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingMetricArgs) {
    super(config, "resource", args, resourceName, "google_logging_metric");
  }
}