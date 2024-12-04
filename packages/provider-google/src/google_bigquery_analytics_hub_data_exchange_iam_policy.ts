import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubDataExchangeIamPolicyArgs {
  data_exchange_id: string;
  policy_data: string;
}

export class google_bigquery_analytics_hub_data_exchange_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubDataExchangeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_data_exchange_iam_policy");
  }
}
