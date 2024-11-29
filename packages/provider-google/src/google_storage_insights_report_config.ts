import { TerraformConfig, TerraformResource } from "tfs";
export interface CsvOptions {
  delimiter?: string;
  header_required?: boolean;
  record_separator?: string;
}
export interface EndDate {
  day: number;
  month: number;
  year: number;
}
export interface StartDate {
  day: number;
  month: number;
  year: number;
}
export interface FrequencyOptions {
  frequency: string;
  end_date: EndDate;
  start_date: StartDate;
}
export interface StorageDestinationOptions {
  bucket: string;
  destination_path?: string;
}
export interface StorageFilters {
  bucket?: string;
}
export interface ObjectMetadataReportOptions {
  metadata_fields: string[];
  storage_destination_options: StorageDestinationOptions;
  storage_filters: StorageFilters;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageInsightsReportConfigArgs {
  display_name?: string;
  location: string;
  csv_options: CsvOptions;
  frequency_options: FrequencyOptions;
  object_metadata_report_options: ObjectMetadataReportOptions;
  timeouts: Timeouts;
}
export class google_storage_insights_report_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageInsightsReportConfigArgs) {
    super(config, "resource", args, resourceName, "google_storage_insights_report_config");
  }
}