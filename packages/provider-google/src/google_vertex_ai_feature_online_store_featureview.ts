import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsBigQuerySource {
  entity_id_columns: string[];
  uri: string;
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySourceFeatureGroups {
  feature_group_id: string;
  feature_ids: string[];
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySource {
  project_number?: string;
  feature_groups: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySourceFeatureGroups;
}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgsSyncConfig {}
export interface GoogleVertexAiFeatureOnlineStoreFeatureviewArgstimeouts {
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
  big_query_source: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsBigQuerySource;
  feature_registry_source: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsFeatureRegistrySource;
  sync_config: GoogleVertexAiFeatureOnlineStoreFeatureviewArgsSyncConfig;
  timeouts: GoogleVertexAiFeatureOnlineStoreFeatureviewArgstimeouts;
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