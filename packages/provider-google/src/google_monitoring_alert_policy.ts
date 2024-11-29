import { TerraformConfig, TerraformResource } from "@konfjs/core";
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
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionAbsentAggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionAbsentTrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionAbsent {
  duration: string;
  filter?: string;
  aggregations: GoogleMonitoringAlertPolicyArgsConditionsConditionAbsentAggregations;
  trigger: GoogleMonitoringAlertPolicyArgsConditionsConditionAbsentTrigger;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionMatchedLog {
  filter: string;
  label_extractors?: {
    [key: string]: string;
  };
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionMonitoringQueryLanguageTrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionMonitoringQueryLanguage {
  duration: string;
  evaluation_missing_data?: string;
  query: string;
  trigger: GoogleMonitoringAlertPolicyArgsConditionsConditionMonitoringQueryLanguageTrigger;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionPrometheusQueryLanguage {
  alert_rule?: string;
  duration?: string;
  evaluation_interval?: string;
  labels?: {
    [key: string]: string;
  };
  query: string;
  rule_group?: string;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdAggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdDenominatorAggregations {
  alignment_period?: string;
  cross_series_reducer?: string;
  group_by_fields?: string[];
  per_series_aligner?: string;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdForecastOptions {
  forecast_horizon: string;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdTrigger {
  count?: number;
  percent?: number;
}
export interface GoogleMonitoringAlertPolicyArgsConditionsConditionThreshold {
  comparison: string;
  denominator_filter?: string;
  duration: string;
  evaluation_missing_data?: string;
  filter?: string;
  threshold_value?: number;
  aggregations: GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdAggregations;
  denominator_aggregations: GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdDenominatorAggregations;
  forecast_options: GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdForecastOptions;
  trigger: GoogleMonitoringAlertPolicyArgsConditionsConditionThresholdTrigger;
}
export interface GoogleMonitoringAlertPolicyArgsConditions {
  display_name: string;
  condition_absent: GoogleMonitoringAlertPolicyArgsConditionsConditionAbsent;
  condition_matched_log: GoogleMonitoringAlertPolicyArgsConditionsConditionMatchedLog;
  condition_monitoring_query_language: GoogleMonitoringAlertPolicyArgsConditionsConditionMonitoringQueryLanguage;
  condition_prometheus_query_language: GoogleMonitoringAlertPolicyArgsConditionsConditionPrometheusQueryLanguage;
  condition_threshold: GoogleMonitoringAlertPolicyArgsConditionsConditionThreshold;
}
export interface GoogleMonitoringAlertPolicyArgsDocumentationLinks {
  display_name?: string;
  url?: string;
}
export interface GoogleMonitoringAlertPolicyArgsDocumentation {
  content?: string;
  mime_type?: string;
  subject?: string;
  links: GoogleMonitoringAlertPolicyArgsDocumentationLinks;
}
export interface GoogleMonitoringAlertPolicyArgsTimeouts {
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
  conditions: GoogleMonitoringAlertPolicyArgsConditions;
  documentation: GoogleMonitoringAlertPolicyArgsDocumentation;
  timeouts: GoogleMonitoringAlertPolicyArgsTimeouts;
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