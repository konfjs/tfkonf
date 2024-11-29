import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageInsightsReportConfigArgsCsvOptions {
  delimiter?: string;
  header_required?: boolean;
  record_separator?: string;
}
export interface GoogleStorageInsightsReportConfigArgsFrequencyOptionsEndDate {
  day: number;
  month: number;
  year: number;
}
export interface GoogleStorageInsightsReportConfigArgsFrequencyOptionsStartDate {
  day: number;
  month: number;
  year: number;
}
export interface GoogleStorageInsightsReportConfigArgsFrequencyOptions {
  frequency: string;
  end_date: GoogleStorageInsightsReportConfigArgsFrequencyOptionsEndDate;
  start_date: GoogleStorageInsightsReportConfigArgsFrequencyOptionsStartDate;
}
export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageDestinationOptions {
  bucket: string;
  destination_path?: string;
}
export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageFilters {
  bucket?: string;
}
export interface GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptions {
  metadata_fields: string[];
  storage_destination_options: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageDestinationOptions;
  storage_filters: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptionsStorageFilters;
}
export interface GoogleStorageInsightsReportConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageInsightsReportConfigArgs {
  display_name?: string;
  location: string;
  csv_options: GoogleStorageInsightsReportConfigArgsCsvOptions;
  frequency_options: GoogleStorageInsightsReportConfigArgsFrequencyOptions;
  object_metadata_report_options: GoogleStorageInsightsReportConfigArgsObjectMetadataReportOptions;
  timeouts: GoogleStorageInsightsReportConfigArgsTimeouts;
}
export class google_storage_insights_report_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageInsightsReportConfigArgs) {
    super(config, "resource", args, resourceName, "google_storage_insights_report_config");
  }
}