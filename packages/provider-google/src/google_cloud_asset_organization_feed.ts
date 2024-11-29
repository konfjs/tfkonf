import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudAssetOrganizationFeedArgscondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleCloudAssetOrganizationFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}
export interface GoogleCloudAssetOrganizationFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetOrganizationFeedArgsFeedOutputConfigPubsubDestination;
}
export interface GoogleCloudAssetOrganizationFeedArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudAssetOrganizationFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project: string;
  content_type?: string;
  feed_id: string;
  org_id: string;
  condition: GoogleCloudAssetOrganizationFeedArgscondition;
  feed_output_config: GoogleCloudAssetOrganizationFeedArgsFeedOutputConfig;
  timeouts: GoogleCloudAssetOrganizationFeedArgstimeouts;
}
export class google_cloud_asset_organization_feed extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudAssetOrganizationFeedArgs) {
    super(config, "resource", args, resourceName, "google_cloud_asset_organization_feed");
  }
}