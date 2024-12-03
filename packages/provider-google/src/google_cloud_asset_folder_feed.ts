import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudAssetFolderFeedArgsCondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleCloudAssetFolderFeedArgsFeedOutputConfigPubsubDestination {
  topic: string;
}
export interface GoogleCloudAssetFolderFeedArgsFeedOutputConfig {
  pubsub_destination: GoogleCloudAssetFolderFeedArgsFeedOutputConfigPubsubDestination;
}
export interface GoogleCloudAssetFolderFeedArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudAssetFolderFeedArgs {
  asset_names?: string[];
  asset_types?: string[];
  billing_project: string;
  content_type?: string;
  feed_id: string;
  folder: string;
  condition: GoogleCloudAssetFolderFeedArgsCondition;
  feed_output_config: GoogleCloudAssetFolderFeedArgsFeedOutputConfig;
  timeouts?: GoogleCloudAssetFolderFeedArgsTimeouts;
}
export class google_cloud_asset_folder_feed extends TerraformResource {
  readonly folder_id!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudAssetFolderFeedArgs) {
    super(config, "resource", args, resourceName, "google_cloud_asset_folder_feed");
  }
}