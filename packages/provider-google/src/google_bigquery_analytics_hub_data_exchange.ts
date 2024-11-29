import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDcrExchangeConfig {}
export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDefaultExchangeConfig {}
export interface GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfig {
  dcr_exchange_config: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDcrExchangeConfig;
  default_exchange_config: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfigDefaultExchangeConfig;
}
export interface GoogleBigqueryAnalyticsHubDataExchangeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryAnalyticsHubDataExchangeArgs {
  data_exchange_id: string;
  description?: string;
  display_name: string;
  documentation?: string;
  icon?: string;
  location: string;
  primary_contact?: string;
  sharing_environment_config: GoogleBigqueryAnalyticsHubDataExchangeArgsSharingEnvironmentConfig;
  timeouts?: GoogleBigqueryAnalyticsHubDataExchangeArgsTimeouts;
}
export class google_bigquery_analytics_hub_data_exchange extends TerraformResource {
  readonly id?: string;
  readonly listing_count!: number;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubDataExchangeArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_data_exchange");
  }
}