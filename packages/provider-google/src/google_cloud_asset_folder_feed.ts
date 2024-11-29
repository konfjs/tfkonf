import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface PubsubDestination {
  topic: string;
}
export interface FeedOutputConfig {
  pubsub_destination: PubsubDestination;
}
export interface Timeouts {
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
  condition: Condition;
  feed_output_config: FeedOutputConfig;
  timeouts: Timeouts;
}
export class google_cloud_asset_folder_feed extends TerraformResource {
  readonly folder_id!: string;
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudAssetFolderFeedArgs) {
    super(config, "resource", args, resourceName, "google_cloud_asset_folder_feed");
  }
}