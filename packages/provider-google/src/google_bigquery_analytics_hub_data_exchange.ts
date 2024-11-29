import { TerraformConfig, TerraformResource } from "tfs";
export interface DcrExchangeConfig {}
export interface DefaultExchangeConfig {}
export interface SharingEnvironmentConfig {
  dcr_exchange_config: DcrExchangeConfig;
  default_exchange_config: DefaultExchangeConfig;
}
export interface Timeouts {
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
  sharing_environment_config: SharingEnvironmentConfig;
  timeouts: Timeouts;
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