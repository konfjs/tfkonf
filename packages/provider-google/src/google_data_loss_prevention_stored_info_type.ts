import { TerraformConfig, TerraformResource } from "tfs";
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
export interface Field {
  name: string;
}
export interface Table {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface BigQueryField {
  field: Field;
  table: Table;
}
export interface CloudStorageFileSet {
  url: string;
}
export interface OutputPath {
  path: string;
}
export interface LargeCustomDictionary {
  big_query_field: BigQueryField;
  cloud_storage_file_set: CloudStorageFileSet;
  output_path: OutputPath;
}
export interface Regex {
  group_indexes?: number[];
  pattern: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgs {
  description?: string;
  display_name?: string;
  parent: string;
  dictionary: Dictionary;
  large_custom_dictionary: LargeCustomDictionary;
  regex: Regex;
  timeouts: Timeouts;
}
export class google_data_loss_prevention_stored_info_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly stored_info_type_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionStoredInfoTypeArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_stored_info_type");
  }
}