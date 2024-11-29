import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgs {
  data_exchange_id: string;
  members: string[];
  role: string;
  condition: GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgscondition;
}
export class google_bigquery_analytics_hub_data_exchange_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubDataExchangeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_data_exchange_iam_binding");
  }
}