import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionaryCloudStoragePath {
  path: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionaryWordList {
  words: string[];
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsDictionary {
  cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeArgsDictionaryCloudStoragePath;
  word_list: GoogleDataLossPreventionStoredInfoTypeArgsDictionaryWordList;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldField {
  name: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldTable {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryField {
  field: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldField;
  table: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionaryBigQueryFieldTable;
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
export interface GoogleDataLossPreventionStoredInfoTypeArgsRegex {
  group_indexes?: number[];
  pattern: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionStoredInfoTypeArgs {
  description?: string;
  display_name?: string;
  parent: string;
  dictionary: GoogleDataLossPreventionStoredInfoTypeArgsDictionary;
  large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeArgsLargeCustomDictionary;
  regex: GoogleDataLossPreventionStoredInfoTypeArgsRegex;
  timeouts?: GoogleDataLossPreventionStoredInfoTypeArgsTimeouts;
}
export class google_data_loss_prevention_stored_info_type extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly stored_info_type_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionStoredInfoTypeArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_stored_info_type");
  }
}