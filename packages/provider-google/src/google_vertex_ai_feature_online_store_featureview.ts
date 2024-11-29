import { TerraformConfig, TerraformResource } from "tfs";
export interface BigQuerySource {
  entity_id_columns: string[];
  uri: string;
}
export interface FeatureGroups {
  feature_group_id: string;
  feature_ids: string[];
}
export interface FeatureRegistrySource {
  project_number?: string;
  feature_groups: FeatureGroups;
}
export interface SyncConfig {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgs {
  feature_online_store: string;
  labels?: {
    [key: string]: string;
  };
  name?: string;
  region: string;
  big_query_source: BigQuerySource;
  feature_registry_source: FeatureRegistrySource;
  sync_config: SyncConfig;
  timeouts: Timeouts;
}
export class google_vertex_ai_feature_online_store_featureview extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureOnlineStoreFeatureviewArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_feature_online_store_featureview");
  }
}