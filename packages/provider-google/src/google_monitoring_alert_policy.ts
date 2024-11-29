import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringAlertPolicyArgsAlertStrategyNotificationChannelStrategy {
  notification_channel_names?: string[];
  renotify_interval?: string;
}
export interface GoogleMonitoringAlertPolicyArgsAlertStrategyNotificationRateLimit {
  period?: string;
}
export interface GoogleMonitoringAlertPolicyArgsAlertStrategy {
  auto_close?: string;
  notification_prompts?: string[];
  notification_channel_strategy: GoogleMonitoringAlertPolicyArgsAlertStrategyNotificationChannelStrategy;
  notification_rate_limit: GoogleMonitoringAlertPolicyArgsAlertStrategyNotificationRateLimit;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionAbsentaggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionAbsenttrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionAbsent {
  duration: string;
  filter?: string;
  aggregations: GoogleMonitoringAlertPolicyArgsconditionsConditionAbsentaggregations;
  trigger: GoogleMonitoringAlertPolicyArgsconditionsConditionAbsenttrigger;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionMatchedLog {
  filter: string;
  label_extractors?: {
    [key: string]: string;
  };
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionMonitoringQueryLanguagetrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionMonitoringQueryLanguage {
  duration: string;
  evaluation_missing_data?: string;
  query: string;
  trigger: GoogleMonitoringAlertPolicyArgsconditionsConditionMonitoringQueryLanguagetrigger;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionPrometheusQueryLanguage {
  alert_rule?: string;
  duration?: string;
  evaluation_interval?: string;
  labels?: {
    [key: string]: string;
  };
  query: string;
  rule_group?: string;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdaggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdDenominatorAggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdForecastOptions {
  forecast_horizon: string;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdtrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsconditionsConditionThreshold {
  comparison: string;
  denominator_filter?: string;
  duration: string;
  evaluation_missing_data?: string;
  filter?: string;
  threshold_value?: number;
  aggregations: GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdaggregations;
  denominator_aggregations: GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdDenominatorAggregations;
  forecast_options: GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdForecastOptions;
  trigger: GoogleMonitoringAlertPolicyArgsconditionsConditionThresholdtrigger;
}
export interface GoogleMonitoringAlertPolicyArgsconditions {
  display_name: string;
  condition_absent: GoogleMonitoringAlertPolicyArgsconditionsConditionAbsent;
  condition_matched_log: GoogleMonitoringAlertPolicyArgsconditionsConditionMatchedLog;
  condition_monitoring_query_language: GoogleMonitoringAlertPolicyArgsconditionsConditionMonitoringQueryLanguage;
  condition_prometheus_query_language: GoogleMonitoringAlertPolicyArgsconditionsConditionPrometheusQueryLanguage;
  condition_threshold: GoogleMonitoringAlertPolicyArgsconditionsConditionThreshold;
}
export interface GoogleMonitoringAlertPolicyArgsdocumentationlinks {
  display_name?: string;
  url?: string;
}
export interface GoogleMonitoringAlertPolicyArgsdocumentation {
  content?: string;
  mime_type?: string;
  subject?: string;
  links: GoogleMonitoringAlertPolicyArgsdocumentationlinks;
}
export interface GoogleMonitoringAlertPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringAlertPolicyArgs {
  combiner: string;
  display_name: string;
  enabled?: boolean;
  notification_channels?: string[];
  severity?: string;
  user_labels?: {
    [key: string]: string;
  };
  alert_strategy: GoogleMonitoringAlertPolicyArgsAlertStrategy;
  conditions: GoogleMonitoringAlertPolicyArgsconditions;
  documentation: GoogleMonitoringAlertPolicyArgsdocumentation;
  timeouts: GoogleMonitoringAlertPolicyArgstimeouts;
}
export class google_monitoring_alert_policy extends TerraformResource {
  readonly creation_record!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringAlertPolicyArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_alert_policy");
  }
}