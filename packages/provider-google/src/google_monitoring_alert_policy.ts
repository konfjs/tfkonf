import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationChannelStrategy {
  notification_channel_names?: string[];
  renotify_interval?: string;
}
export interface NotificationRateLimit {
  period?: string;
}
export interface AlertStrategy {
  auto_close?: string;
  notification_prompts?: string[];
  notification_channel_strategy: NotificationChannelStrategy;
  notification_rate_limit: NotificationRateLimit;
}
export interface Aggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface Trigger {
  count?: number;
  percent?: number;
}
export interface ConditionAbsent {
  duration: string;
  filter?: string;
  aggregations: Aggregations;
  trigger: Trigger;
}
export interface ConditionMatchedLog {
  filter: string;
  label_extractors?: {
    [key: string]: string;
  };
}
export interface Trigger {
  count?: number;
  percent?: number;
}
export interface ConditionMonitoringQueryLanguage {
  duration: string;
  evaluation_missing_data?: string;
  query: string;
  trigger: Trigger;
}
export interface ConditionPrometheusQueryLanguage {
  alert_rule?: string;
  duration?: string;
  evaluation_interval?: string;
  labels?: {
    [key: string]: string;
  };
  query: string;
  rule_group?: string;
}
export interface Aggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface DenominatorAggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface ForecastOptions {
  forecast_horizon: string;
}
export interface Trigger {
  count?: number;
  percent?: number;
}
export interface ConditionThreshold {
  comparison: string;
  denominator_filter?: string;
  duration: string;
  evaluation_missing_data?: string;
  filter?: string;
  threshold_value?: number;
  aggregations: Aggregations;
  denominator_aggregations: DenominatorAggregations;
  forecast_options: ForecastOptions;
  trigger: Trigger;
}
export interface Conditions {
  display_name: string;
  condition_absent: ConditionAbsent;
  condition_matched_log: ConditionMatchedLog;
  condition_monitoring_query_language: ConditionMonitoringQueryLanguage;
  condition_prometheus_query_language: ConditionPrometheusQueryLanguage;
  condition_threshold: ConditionThreshold;
}
export interface Links {
  display_name?: string;
  url?: string;
}
export interface Documentation {
  content?: string;
  mime_type?: string;
  subject?: string;
  links: Links;
}
export interface Timeouts {
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
  alert_strategy: AlertStrategy;
  conditions: Conditions;
  documentation: Documentation;
  timeouts: Timeouts;
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