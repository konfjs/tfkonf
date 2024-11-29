import { TerraformConfig, TerraformResource } from "tfs";
export interface SelectedResources {
  table?: string;
}
export interface BigqueryDataset {
  dataset: string;
  selected_resources: SelectedResources;
}
export interface DataProvider {
  name: string;
  primary_contact?: string;
}
export interface Publisher {
  name: string;
  primary_contact?: string;
}
export interface RestrictedExportConfig {
  enabled?: boolean;
  restrict_query_result?: boolean;
}
export interface Timeouts {
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
  bigquery_dataset: BigqueryDataset;
  data_provider: DataProvider;
  publisher: Publisher;
  restricted_export_config: RestrictedExportConfig;
  timeouts: Timeouts;
}
export class google_bigquery_analytics_hub_listing extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubListingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_listing");
  }
}