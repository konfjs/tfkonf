import { TerraformConfig, TerraformResource } from "tfs";
export interface ProfileTable {
  dataset_id?: string;
  project_id?: string;
  table_id?: string;
}
export interface ExportData {
  profile_table: ProfileTable;
}
export interface Conditions {
  minimum_risk_score?: string;
  minimum_sensitivity_score?: string;
}
export interface Expressions {
  logical_operator?: string;
  conditions: Conditions;
}
export interface PubsubCondition {
  expressions: Expressions;
}
export interface PubSubNotification {
  detail_of_message?: string;
  event?: string;
  topic?: string;
  pubsub_condition: PubsubCondition;
}
export interface SensitivityScore {
  score: string;
}
export interface Tag {
  namespaced_value?: string;
}
export interface TagConditions {
  sensitivity_score: SensitivityScore;
  tag: Tag;
}
export interface TagResources {
  lower_data_risk_to_low?: boolean;
  profile_generations_to_tag?: string[];
  tag_conditions: TagConditions;
}
export interface Actions {
  export_data: ExportData;
  pub_sub_notification: PubSubNotification;
  tag_resources: TagResources;
}
export interface Location {
  folder_id?: string;
  organization_id?: string;
}
export interface OrgConfig {
  project_id?: string;
  location: Location;
}
export interface InspectTemplateModifiedCadence {
  frequency?: string;
}
export interface SchemaModifiedCadence {
  frequency?: string;
  types?: string[];
}
export interface TableModifiedCadence {
  frequency?: string;
  types?: string[];
}
export interface Cadence {
  inspect_template_modified_cadence: InspectTemplateModifiedCadence;
  schema_modified_cadence: SchemaModifiedCadence;
  table_modified_cadence: TableModifiedCadence;
}
export interface OrConditions {
  min_age?: string;
  min_row_count?: number;
}
export interface Types {
  types?: string[];
}
export interface Conditions {
  created_after?: string;
  type_collection?: string;
  or_conditions: OrConditions;
  types: Types;
}
export interface Disabled {}
export interface OtherTables {}
export interface TableReference {
  dataset_id: string;
  table_id: string;
}
export interface Patterns {
  dataset_id_regex?: string;
  project_id_regex?: string;
  table_id_regex?: string;
}
export interface IncludeRegexes {
  patterns: Patterns;
}
export interface Tables {
  include_regexes: IncludeRegexes;
}
export interface Filter {
  other_tables: OtherTables;
  table_reference: TableReference;
  tables: Tables;
}
export interface BigQueryTarget {
  cadence: Cadence;
  conditions: Conditions;
  disabled: Disabled;
  filter: Filter;
}
export interface Conditions {
  database_engines?: string[];
  types?: string[];
}
export interface Disabled {}
export interface Patterns {
  database_regex?: string;
  database_resource_name_regex?: string;
  instance_regex?: string;
  project_id_regex?: string;
}
export interface IncludeRegexes {
  patterns: Patterns;
}
export interface Collection {
  include_regexes: IncludeRegexes;
}
export interface DatabaseResourceReference {
  database: string;
  database_resource: string;
  instance: string;
  project_id: string;
}
export interface Others {}
export interface Filter {
  collection: Collection;
  database_resource_reference: DatabaseResourceReference;
  others: Others;
}
export interface InspectTemplateModifiedCadence {
  frequency: string;
}
export interface SchemaModifiedCadence {
  frequency?: string;
  types?: string[];
}
export interface GenerationCadence {
  refresh_frequency?: string;
  inspect_template_modified_cadence: InspectTemplateModifiedCadence;
  schema_modified_cadence: SchemaModifiedCadence;
}
export interface CloudSqlTarget {
  conditions: Conditions;
  disabled: Disabled;
  filter: Filter;
  generation_cadence: GenerationCadence;
}
export interface CloudStorageConditions {
  included_bucket_attributes?: string[];
  included_object_attributes?: string[];
}
export interface Conditions {
  created_after?: string;
  min_age?: string;
  cloud_storage_conditions: CloudStorageConditions;
}
export interface Disabled {}
export interface CloudStorageResourceReference {
  bucket_name?: string;
  project_id?: string;
}
export interface CloudStorageRegex {
  bucket_name_regex?: string;
  project_id_regex?: string;
}
export interface Patterns {
  cloud_storage_regex: CloudStorageRegex;
}
export interface IncludeRegexes {
  patterns: Patterns;
}
export interface Collection {
  include_regexes: IncludeRegexes;
}
export interface Others {}
export interface Filter {
  cloud_storage_resource_reference: CloudStorageResourceReference;
  collection: Collection;
  others: Others;
}
export interface InspectTemplateModifiedCadence {
  frequency?: string;
}
export interface GenerationCadence {
  refresh_frequency?: string;
  inspect_template_modified_cadence: InspectTemplateModifiedCadence;
}
export interface CloudStorageTarget {
  conditions: Conditions;
  disabled: Disabled;
  filter: Filter;
  generation_cadence: GenerationCadence;
}
export interface SecretsTarget {}
export interface Targets {
  big_query_target: BigQueryTarget;
  cloud_sql_target: CloudSqlTarget;
  cloud_storage_target: CloudStorageTarget;
  secrets_target: SecretsTarget;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionDiscoveryConfigArgs {
  display_name?: string;
  inspect_templates?: string[];
  location: string;
  parent: string;
  status?: string;
  actions: Actions;
  org_config: OrgConfig;
  targets: Targets;
  timeouts: Timeouts;
}
export class google_data_loss_prevention_discovery_config extends TerraformResource {
  readonly create_time!: string;
  readonly errors!: any[];
  readonly id?: string;
  readonly last_run_time!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionDiscoveryConfigArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_discovery_config");
  }
}