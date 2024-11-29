import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigBruteForceConfig {}
export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigTreeAhConfig {
  leaf_node_embedding_count?: number;
  leaf_nodes_to_search_percent?: number;
}
export interface GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfig {
  brute_force_config: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigBruteForceConfig;
  tree_ah_config: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfigTreeAhConfig;
}
export interface GoogleVertexAiIndexArgsMetadataConfig {
  approximate_neighbors_count?: number;
  dimensions: number;
  distance_measure_type?: string;
  feature_norm_type?: string;
  algorithm_config: GoogleVertexAiIndexArgsMetadataConfigAlgorithmConfig;
}
export interface GoogleVertexAiIndexArgsMetadata {
  contents_delta_uri: string;
  is_complete_overwrite?: boolean;
  config: GoogleVertexAiIndexArgsMetadataConfig;
}
export interface GoogleVertexAiIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiIndexArgs {
  description?: string;
  display_name: string;
  index_update_method?: string;
  labels?: {
    [key: string]: string;
  };
  region?: string;
  metadata: GoogleVertexAiIndexArgsMetadata;
  timeouts: GoogleVertexAiIndexArgsTimeouts;
}
export class google_vertex_ai_index extends TerraformResource {
  readonly create_time!: string;
  readonly deployed_indexes!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly index_stats!: any[];
  readonly metadata_schema_uri!: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiIndexArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_index");
  }
}