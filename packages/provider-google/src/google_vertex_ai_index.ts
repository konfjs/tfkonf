import { TerraformConfig, TerraformResource } from "tfs";
export interface BruteForceConfig {}
export interface TreeAhConfig {
  leaf_node_embedding_count?: number;
  leaf_nodes_to_search_percent?: number;
}
export interface AlgorithmConfig {
  brute_force_config: BruteForceConfig;
  tree_ah_config: TreeAhConfig;
}
export interface Config {
  approximate_neighbors_count?: number;
  dimensions: number;
  distance_measure_type?: string;
  feature_norm_type?: string;
  algorithm_config: AlgorithmConfig;
}
export interface Metadata {
  contents_delta_uri: string;
  is_complete_overwrite?: boolean;
  config: Config;
}
export interface Timeouts {
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
  metadata: Metadata;
  timeouts: Timeouts;
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