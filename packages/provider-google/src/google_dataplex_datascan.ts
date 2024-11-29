import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexDatascanArgsdata {
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
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesNonNullExpectation {}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesRangeExpectation {
  max_value?: string;
  min_value?: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesRegexExpectation {
  regex: string;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesRowConditionExpectation {
  sql_expression: string;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesSetExpectation {
  values: string[];
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesSqlAssertion {
  sql_statement: string;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesStatisticRangeExpectation {
  max_value?: string;
  min_value?: string;
  statistic: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesTableConditionExpectation {
  sql_expression: string;
}
export interface GoogleDataplexDatascanArgsDataQualitySpecrulesUniquenessExpectation {}
export interface GoogleDataplexDatascanArgsDataQualitySpecrules {
  column?: string;
  description?: string;
  dimension: string;
  ignore_null?: boolean;
  name?: string;
  threshold?: number;
  non_null_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesNonNullExpectation;
  range_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesRangeExpectation;
  regex_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesRegexExpectation;
  row_condition_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesRowConditionExpectation;
  set_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesSetExpectation;
  sql_assertion: GoogleDataplexDatascanArgsDataQualitySpecrulesSqlAssertion;
  statistic_range_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesStatisticRangeExpectation;
  table_condition_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesTableConditionExpectation;
  uniqueness_expectation: GoogleDataplexDatascanArgsDataQualitySpecrulesUniquenessExpectation;
}
export interface GoogleDataplexDatascanArgsDataQualitySpec {
  row_filter?: string;
  sampling_percent?: number;
  post_scan_actions: GoogleDataplexDatascanArgsDataQualitySpecPostScanActions;
  rules: GoogleDataplexDatascanArgsDataQualitySpecrules;
}
export interface GoogleDataplexDatascanArgsExecutionSpectriggerOnDemand {}
export interface GoogleDataplexDatascanArgsExecutionSpectriggerschedule {
  cron: string;
}
export interface GoogleDataplexDatascanArgsExecutionSpectrigger {
  on_demand: GoogleDataplexDatascanArgsExecutionSpectriggerOnDemand;
  schedule: GoogleDataplexDatascanArgsExecutionSpectriggerschedule;
}
export interface GoogleDataplexDatascanArgsExecutionSpec {
  field?: string;
  trigger: GoogleDataplexDatascanArgsExecutionSpectrigger;
}
export interface GoogleDataplexDatascanArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexDatascanArgs {
  data_scan_id: string;
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  data: GoogleDataplexDatascanArgsdata;
  data_profile_spec: GoogleDataplexDatascanArgsDataProfileSpec;
  data_quality_spec: GoogleDataplexDatascanArgsDataQualitySpec;
  execution_spec: GoogleDataplexDatascanArgsExecutionSpec;
  timeouts: GoogleDataplexDatascanArgstimeouts;
}
export class google_dataplex_datascan extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly execution_status!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly type!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_datascan");
  }
}