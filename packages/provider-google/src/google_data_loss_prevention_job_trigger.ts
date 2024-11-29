import { TerraformConfig, TerraformResource } from "tfs";
export interface TransformationConfig {
  deidentify_template?: string;
  image_redact_template?: string;
  structured_deidentify_template?: string;
}
export interface Table {
  dataset_id: string;
  project_id: string;
  table_id?: string;
}
export interface TransformationDetailsStorageConfig {
  table: Table;
}
export interface Deidentify {
  cloud_storage_output: string;
  file_types_to_transform?: string[];
  transformation_config: TransformationConfig;
  transformation_details_storage_config: TransformationDetailsStorageConfig;
}
export interface JobNotificationEmails {}
export interface PubSub {
  topic: string;
}
export interface PublishFindingsToCloudDataCatalog {}
export interface PublishSummaryToCscc {}
export interface PublishToStackdriver {}
export interface Table {
  dataset_id: string;
  project_id: string;
  table_id?: string;
}
export interface OutputConfig {
  output_schema?: string;
  table: Table;
}
export interface SaveFindings {
  output_config: OutputConfig;
}
export interface Actions {
  deidentify: Deidentify;
  job_notification_emails: JobNotificationEmails;
  pub_sub: PubSub;
  publish_findings_to_cloud_data_catalog: PublishFindingsToCloudDataCatalog;
  publish_summary_to_cscc: PublishSummaryToCscc;
  publish_to_stackdriver: PublishToStackdriver;
  save_findings: SaveFindings;
}
export interface CloudStoragePath {
  path: string;
}
export interface WordList {
  words: string[];
}
export interface Dictionary {
  cloud_storage_path: CloudStoragePath;
  word_list: WordList;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface Regex {
  group_indexes?: number[];
  pattern: string;
}
export interface SensitivityScore {
  score: string;
}
export interface StoredType {
  name: string;
}
export interface SurrogateType {}
export interface CustomInfoTypes {
  exclusion_type?: string;
  likelihood?: string;
  dictionary: Dictionary;
  info_type: InfoType;
  regex: Regex;
  sensitivity_score: SensitivityScore;
  stored_type: StoredType;
  surrogate_type: SurrogateType;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface MaxFindingsPerInfoType {
  max_findings?: number;
  info_type: InfoType;
}
export interface Limits {
  max_findings_per_item?: number;
  max_findings_per_request?: number;
  max_findings_per_info_type: MaxFindingsPerInfoType;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CloudStoragePath {
  path: string;
}
export interface WordList {
  words: string[];
}
export interface Dictionary {
  cloud_storage_path: CloudStoragePath;
  word_list: WordList;
}
export interface HotwordRegex {
  group_indexes?: number[];
  pattern?: string;
}
export interface Proximity {
  window_after?: number;
  window_before?: number;
}
export interface ExcludeByHotword {
  hotword_regex: HotwordRegex;
  proximity: Proximity;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface ExcludeInfoTypes {
  info_types: InfoTypes;
}
export interface Regex {
  group_indexes?: number[];
  pattern: string;
}
export interface ExclusionRule {
  matching_type: string;
  dictionary: Dictionary;
  exclude_by_hotword: ExcludeByHotword;
  exclude_info_types: ExcludeInfoTypes;
  regex: Regex;
}
export interface HotwordRegex {
  group_indexes?: number[];
  pattern?: string;
}
export interface LikelihoodAdjustment {
  fixed_likelihood?: string;
  relative_likelihood?: number;
}
export interface Proximity {
  window_after?: number;
  window_before?: number;
}
export interface HotwordRule {
  hotword_regex: HotwordRegex;
  likelihood_adjustment: LikelihoodAdjustment;
  proximity: Proximity;
}
export interface Rules {
  exclusion_rule: ExclusionRule;
  hotword_rule: HotwordRule;
}
export interface RuleSet {
  info_types: InfoTypes;
  rules: Rules;
}
export interface InspectConfig {
  exclude_info_types?: boolean;
  include_quote?: boolean;
  min_likelihood?: string;
  custom_info_types: CustomInfoTypes;
  info_types: InfoTypes;
  limits: Limits;
  rule_set: RuleSet;
}
export interface ExcludedFields {
  name: string;
}
export interface IdentifyingFields {
  name: string;
}
export interface IncludedFields {
  name: string;
}
export interface TableReference {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface BigQueryOptions {
  rows_limit?: number;
  rows_limit_percent?: number;
  sample_method?: string;
  excluded_fields: ExcludedFields;
  identifying_fields: IdentifyingFields;
  included_fields: IncludedFields;
  table_reference: TableReference;
}
export interface RegexFileSet {
  bucket_name: string;
  exclude_regex?: string[];
  include_regex?: string[];
}
export interface FileSet {
  url?: string;
  regex_file_set: RegexFileSet;
}
export interface CloudStorageOptions {
  bytes_limit_per_file?: number;
  bytes_limit_per_file_percent?: number;
  file_types?: string[];
  files_limit_percent?: number;
  sample_method?: string;
  file_set: FileSet;
}
export interface Kind {
  name: string;
}
export interface PartitionId {
  namespace_id?: string;
  project_id: string;
}
export interface DatastoreOptions {
  kind: Kind;
  partition_id: PartitionId;
}
export interface IdentifyingFields {
  name: string;
}
export interface TableOptions {
  identifying_fields: IdentifyingFields;
}
export interface HybridOptions {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  required_finding_label_keys?: string[];
  table_options: TableOptions;
}
export interface TimestampField {
  name: string;
}
export interface TimespanConfig {
  enable_auto_population_of_timespan_config?: boolean;
  end_time?: string;
  start_time?: string;
  timestamp_field: TimestampField;
}
export interface StorageConfig {
  big_query_options: BigQueryOptions;
  cloud_storage_options: CloudStorageOptions;
  datastore_options: DatastoreOptions;
  hybrid_options: HybridOptions;
  timespan_config: TimespanConfig;
}
export interface InspectJob {
  inspect_template_name?: string;
  actions: Actions;
  inspect_config: InspectConfig;
  storage_config: StorageConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Manual {}
export interface Schedule {
  recurrence_period_duration?: string;
}
export interface Triggers {
  manual: Manual;
  schedule: Schedule;
}
export interface GoogleDataLossPreventionJobTriggerArgs {
  description?: string;
  display_name?: string;
  parent: string;
  status?: string;
  inspect_job: InspectJob;
  timeouts: Timeouts;
  triggers: Triggers;
}
export class google_data_loss_prevention_job_trigger extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly last_run_time!: string;
  readonly name!: string;
  readonly trigger_id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionJobTriggerArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_job_trigger");
  }
}