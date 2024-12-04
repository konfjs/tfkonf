import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryAnalyticsHubListingIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigqueryAnalyticsHubListingIamMemberArgs {
  data_exchange_id: string;
  listing_id: string;
  member: string;
  role: string;
  condition: GoogleBigqueryAnalyticsHubListingIamMemberArgsCondition;
}

export class google_bigquery_analytics_hub_listing_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryAnalyticsHubListingIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_analytics_hub_listing_iam_member");
  }
}
