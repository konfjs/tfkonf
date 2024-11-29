import { TerraformConfig, TerraformResource } from "tfs";
export interface Availability {
  enabled?: boolean;
}
export interface Latency {
  threshold: string;
}
export interface BasicSli {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: Availability;
  latency: Latency;
}
export interface Range {
  max?: number;
  min?: number;
}
export interface DistributionCut {
  distribution_filter: string;
  range: Range;
}
export interface GoodTotalRatio {
  bad_service_filter?: string;
  good_service_filter?: string;
  total_service_filter?: string;
}
export interface RequestBasedSli {
  distribution_cut: DistributionCut;
  good_total_ratio: GoodTotalRatio;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Availability {
  enabled?: boolean;
}
export interface Latency {
  threshold: string;
}
export interface BasicSliPerformance {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: Availability;
  latency: Latency;
}
export interface Range {
  max?: number;
  min?: number;
}
export interface DistributionCut {
  distribution_filter: string;
  range: Range;
}
export interface GoodTotalRatio {
  bad_service_filter?: string;
  good_service_filter?: string;
  total_service_filter?: string;
}
export interface Performance {
  distribution_cut: DistributionCut;
  good_total_ratio: GoodTotalRatio;
}
export interface GoodTotalRatioThreshold {
  threshold?: number;
  basic_sli_performance: BasicSliPerformance;
  performance: Performance;
}
export interface Range {
  max?: number;
  min?: number;
}
export interface MetricMeanInRange {
  time_series: string;
  range: Range;
}
export interface Range {
  max?: number;
  min?: number;
}
export interface MetricSumInRange {
  time_series: string;
  range: Range;
}
export interface WindowsBasedSli {
  good_bad_metric_filter?: string;
  window_period?: string;
  good_total_ratio_threshold: GoodTotalRatioThreshold;
  metric_mean_in_range: MetricMeanInRange;
  metric_sum_in_range: MetricSumInRange;
}
export interface GoogleMonitoringSloArgs {
  calendar_period?: string;
  display_name?: string;
  goal: number;
  rolling_period_days?: number;
  service: string;
  user_labels?: {
    [key: string]: string;
  };
  basic_sli: BasicSli;
  request_based_sli: RequestBasedSli;
  timeouts: Timeouts;
  windows_based_sli: WindowsBasedSli;
}
export class google_monitoring_slo extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly slo_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringSloArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_slo");
  }
}