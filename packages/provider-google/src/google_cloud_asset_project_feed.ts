import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudAssetProjectFeedArgsCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleCloudAssetProjectFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}
export interface GoogleCloudAssetProjectFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetProjectFeedArgsFeedOutputConfigPubsubDestination;
}
export interface GoogleCloudAssetProjectFeedArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudAssetProjectFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project?: string;
  content_type?: string;
  feed_id: string;
  condition: GoogleCloudAssetProjectFeedArgsCondition;
  feed_output_config: GoogleCloudAssetProjectFeedArgsFeedOutputConfig;
  timeouts?: GoogleCloudAssetProjectFeedArgsTimeouts;
}
export class google_cloud_asset_project_feed extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudAssetProjectFeedArgs) {
    super(config, "resource", args, resourceName, "google_cloud_asset_project_feed");
  }
}