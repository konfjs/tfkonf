import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataLossPreventionStoredInfoTypeArgsdictionaryCloudStoragePath {
  path: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsdictionaryWordList {
  words: string[];
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsdictionary {
  cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeArgsdictionaryCloudStoragePath;
  word_list: GoogleDataLossPreventionStoredInfoTypeArgsdictionaryWordList;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldfield {
  name: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldtable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryField {
  field: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldfield;
  table: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldtable;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryCloudStorageFileSet {
  url: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryOutputPath {
  path: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionary {
  big_query_field: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryField;
  cloud_storage_file_set: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryCloudStorageFileSet;
  output_path: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryOutputPath;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsregex {
  group_indexes?: number[];
  pattern: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgs {
  description?: string;
  display_name?: string;
  parent: string;
  dictionary: GoogleDataLossPreventionStoredInfoTypeArgsdictionary;
  large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionary;
  regex: GoogleDataLossPreventionStoredInfoTypeArgsregex;
  timeouts: GoogleDataLossPreventionStoredInfoTypeArgstimeouts;
}
export class google_data_loss_prevention_stored_info_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly stored_info_type_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionStoredInfoTypeArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_stored_info_type");
  }
}