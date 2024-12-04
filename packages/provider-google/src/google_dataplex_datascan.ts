import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexDatascanArgsData {
  entity?: string;
  resource?: string;
}

export interface GoogleDataplexDatascanArgsDataProfileSpecExcludeFields {
  field_names?: string[];
}

export interface GoogleDataplexDatascanArgsDataProfileSpecIncludeFields {
  field_names?: string[];
}

export interface GoogleDataplexDatascanArgsDataProfileSpecPostScanActionsBigqueryExport {
  results_table?: string;
}

export interface GoogleDataplexDatascanArgsDataProfileSpecPostScanActions {
  bigquery_export: GoogleDataplexDatascanArgsDataProfileSpecPostScanActionsBigqueryExport;
}

export interface GoogleDataplexDatascanArgsDataProfileSpec {
  row_filter?: string;
  sampling_percent?: number;
  exclude_fields: GoogleDataplexDatascanArgsDataProfileSpecExcludeFields;
  include_fields: GoogleDataplexDatascanArgsDataProfileSpecIncludeFields;
  post_scan_actions: GoogleDataplexDatascanArgsDataProfileSpecPostScanActions;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecPostScanActionsBigqueryExport {
  results_table?: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecPostScanActions {
  bigquery_export: GoogleDataplexDatascanArgsDataQualitySpecPostScanActionsBigqueryExport;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesNonNullExpectation {
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRangeExpectation {
  max_value?: string;
  min_value?: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRegexExpectation {
  regex: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRowConditionExpectation {
  sql_expression: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesSetExpectation {
  values: string[];
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesSqlAssertion {
  sql_statement: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesStatisticRangeExpectation {
  max_value?: string;
  min_value?: string;
  statistic: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesTableConditionExpectation {
  sql_expression: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesUniquenessExpectation {
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRules {
  column?: string;
  description?: string;
  dimension: string;
  ignore_null?: boolean;
  name?: string;
  threshold?: number;
  non_null_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesNonNullExpectation;
  range_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesRangeExpectation;
  regex_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesRegexExpectation;
  row_condition_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesRowConditionExpectation;
  set_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesSetExpectation;
  sql_assertion: GoogleDataplexDatascanArgsDataQualitySpecRulesSqlAssertion;
  statistic_range_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesStatisticRangeExpectation;
  table_condition_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesTableConditionExpectation;
  uniqueness_expectation: GoogleDataplexDatascanArgsDataQualitySpecRulesUniquenessExpectation;
}

export interface GoogleDataplexDatascanArgsDataQualitySpec {
  row_filter?: string;
  sampling_percent?: number;
  post_scan_actions: GoogleDataplexDatascanArgsDataQualitySpecPostScanActions;
  rules: GoogleDataplexDatascanArgsDataQualitySpecRules;
}

export interface GoogleDataplexDatascanArgsExecutionSpecTriggerOnDemand {
}

export interface GoogleDataplexDatascanArgsExecutionSpecTriggerSchedule {
  cron: string;
}

export interface GoogleDataplexDatascanArgsExecutionSpecTrigger {
  on_demand: GoogleDataplexDatascanArgsExecutionSpecTriggerOnDemand;
  schedule: GoogleDataplexDatascanArgsExecutionSpecTriggerSchedule;
}

export interface GoogleDataplexDatascanArgsExecutionSpec {
  field?: string;
  trigger: GoogleDataplexDatascanArgsExecutionSpecTrigger;
}

export interface GoogleDataplexDatascanArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexDatascanArgs {
  data_scan_id: string;
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  data: GoogleDataplexDatascanArgsData;
  data_profile_spec: GoogleDataplexDatascanArgsDataProfileSpec;
  data_quality_spec: GoogleDataplexDatascanArgsDataQualitySpec;
  execution_spec: GoogleDataplexDatascanArgsExecutionSpec;
  timeouts?: GoogleDataplexDatascanArgsTimeouts;
}

export class google_dataplex_datascan extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly execution_status!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly type!: string;
  readonly uid!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_datascan");
  }
}
