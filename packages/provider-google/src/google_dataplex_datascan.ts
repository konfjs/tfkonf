import { TerraformConfig, TerraformResource } from "tfs";
export interface Data {
  entity?: string;
  resource?: string;
}
export interface ExcludeFields {
  field_names?: string[];
}
export interface IncludeFields {
  field_names?: string[];
}
export interface BigqueryExport {
  results_table?: string;
}
export interface PostScanActions {
  bigquery_export: BigqueryExport;
}
export interface DataProfileSpec {
  row_filter?: string;
  sampling_percent?: number;
  exclude_fields: ExcludeFields;
  include_fields: IncludeFields;
  post_scan_actions: PostScanActions;
}
export interface BigqueryExport {
  results_table?: string;
}
export interface PostScanActions {
  bigquery_export: BigqueryExport;
}
export interface NonNullExpectation {}
export interface RangeExpectation {
  max_value?: string;
  min_value?: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}
export interface RegexExpectation {
  regex: string;
}
export interface RowConditionExpectation {
  sql_expression: string;
}
export interface SetExpectation {
  values: string[];
}
export interface SqlAssertion {
  sql_statement: string;
}
export interface StatisticRangeExpectation {
  max_value?: string;
  min_value?: string;
  statistic: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}
export interface TableConditionExpectation {
  sql_expression: string;
}
export interface UniquenessExpectation {}
export interface Rules {
  column?: string;
  description?: string;
  dimension: string;
  ignore_null?: boolean;
  name?: string;
  threshold?: number;
  non_null_expectation: NonNullExpectation;
  range_expectation: RangeExpectation;
  regex_expectation: RegexExpectation;
  row_condition_expectation: RowConditionExpectation;
  set_expectation: SetExpectation;
  sql_assertion: SqlAssertion;
  statistic_range_expectation: StatisticRangeExpectation;
  table_condition_expectation: TableConditionExpectation;
  uniqueness_expectation: UniquenessExpectation;
}
export interface DataQualitySpec {
  row_filter?: string;
  sampling_percent?: number;
  post_scan_actions: PostScanActions;
  rules: Rules;
}
export interface OnDemand {}
export interface Schedule {
  cron: string;
}
export interface Trigger {
  on_demand: OnDemand;
  schedule: Schedule;
}
export interface ExecutionSpec {
  field?: string;
  trigger: Trigger;
}
export interface Timeouts {
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
  data: Data;
  data_profile_spec: DataProfileSpec;
  data_quality_spec: DataQualitySpec;
  execution_spec: ExecutionSpec;
  timeouts: Timeouts;
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