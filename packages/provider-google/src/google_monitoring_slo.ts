import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringSloArgsBasicSliavailability {
  enabled?: boolean;
}
export interface GoogleMonitoringSloArgsBasicSlilatency {
  threshold: string;
}
export interface GoogleMonitoringSloArgsBasicSli {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: GoogleMonitoringSloArgsBasicSliavailability;
  latency: GoogleMonitoringSloArgsBasicSlilatency;
}
export interface GoogleMonitoringSloArgsRequestBasedSliDistributionCutrange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsRequestBasedSliDistributionCut {
  distribution_filter: string;
  range: GoogleMonitoringSloArgsRequestBasedSliDistributionCutrange;
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
export interface GoogleMonitoringSloArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceavailability {
  enabled?: boolean;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformancelatency {
  threshold: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance {
  location?: string[];
  method?: string[];
  version?: string[];
  availability: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceavailability;
  latency: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformancelatency;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceDistributionCutrange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceDistributionCut {
  distribution_filter: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceDistributionCutrange;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceGoodTotalRatio {
  bad_service_filter?: string;
  good_service_filter?: string;
  total_service_filter?: string;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformance {
  distribution_cut: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceDistributionCut;
  good_total_ratio: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformanceGoodTotalRatio;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThreshold {
  threshold?: number;
  basic_sli_performance: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
  performance: GoogleMonitoringSloArgsWindowsBasedSliGoodTotalRatioThresholdperformance;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRangerange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRange {
  time_series: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliMetricMeanInRangerange;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRangerange {
  max?: number;
  min?: number;
}
export interface GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRange {
  time_series: string;
  range: GoogleMonitoringSloArgsWindowsBasedSliMetricSumInRangerange;
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
  timeouts: GoogleMonitoringSloArgstimeouts;
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