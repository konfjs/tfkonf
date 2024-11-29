import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryAnalyticsHubListingArgsBigqueryDatasetSelectedResources {
  table?: string;
}
export interface GoogleBigqueryAnalyticsHubListingArgsBigqueryDataset {
  dataset: string;
  selected_resources: GoogleBigqueryAnalyticsHubListingArgsBigqueryDatasetSelectedResources;
}
export interface GoogleBigqueryAnalyticsHubListingArgsDataProvider {
  name: string;
  primary_contact?: string;
}
export interface GoogleBigqueryAnalyticsHubListingArgspublisher {
  name: string;
  primary_contact?: string;
}
export interface GoogleBigqueryAnalyticsHubListingArgsRestrictedExportConfig {
  enabled?: boolean;
  restrict_query_result?: boolean;
}
export interface GoogleBigqueryAnalyticsHubListingArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryAnalyticsHubListingArgs {
  categories?: string[];
  data_exchange_id: string;
  description?: string;
  display_name: string;
  documentation?: string;
  icon?: string;
  listing_id: string;
  location: string;
  primary_contact?: string;
  request_access?: string;
  bigquery_dataset: GoogleBigqueryAnalyticsHubListingArgsBigqueryDataset;
  data_provider: GoogleBigqueryAnalyticsHubListingArgsDataProvider;
  publisher: GoogleBigqueryAnalyticsHubListingArgspublisher;
  restricted_export_config: GoogleBigqueryAnalyticsHubListingArgsRestrictedExportConfig;
  timeouts: GoogleBigqueryAnalyticsHubListingArgstimeouts;
}
export class google_bigquery_analytics_hub_listing extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubListingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_listing");
  }
}