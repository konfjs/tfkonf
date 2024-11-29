import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringSloArgsBasicSliAvailability {
  enabled?: boolean;
}
export interface GoogleMonitoringSloArgsBasicSliLatency {
  threshold: string;
}
export interface GoogleMonitoringSloArgsBasicSli {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: GoogleMonitoringSloArgsBasicSliAvailability;
  latency: GoogleMonitoringSloArgsBasicSliLatency;
}
export interface GoogleMonitoringSloArgsRequestBasedSliDistributionCutRange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsRequestBasedSliDistributionCut {
  distribution_filter: string;
  range: GoogleMonitoringSloArgsRequestBasedSliDistributionCutRange;
}
export interface GoogleMonitoringSloArgsRequestBasedSliGoodTotalRatio {
  bad_service_filter?: string;
  good_service_filter?: string;
  total_service_filter?: string;
}
export interface GoogleMonitoringSloArgsRequestBasedSli {
  distribution_cut: GoogleMonitoringSloArgsRequestBasedSliDistributionCut;
  good_total_ratio: GoogleMonitoringSloArgsRequestBasedSliGoodTotalRatio;
}
export interface GoogleMonitoringSloArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  enabled?: boolean;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  threshold: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;
  latency: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut {
  distribution_filter: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio {
  bad_service_filter?: string;
  good_service_filter?: string;
  total_service_filter?: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformance {
  distribution_cut: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;
  good_total_ratio: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThreshold {
  threshold?: number;
  basic_sli_performance: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
  performance: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdPerformance;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRangeRange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRange {
  time_series: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRangeRange;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRangeRange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRange {
  time_series: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRangeRange;
}
export interface GoogleMonitoringSloArgsWindowsBasedSli {
  good_bad_metric_filter?: string;
  window_period?: string;
  good_total_ratio_threshold: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThreshold;
  metric_mean_in_range: GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRange;
  metric_sum_in_range: GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRange;
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
  basic_sli: GoogleMonitoringSloArgsBasicSli;
  request_based_sli: GoogleMonitoringSloArgsRequestBasedSli;
  timeouts: GoogleMonitoringSloArgsTimeouts;
  windows_based_sli: GoogleMonitoringSloArgsWindowsBasedSli;
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