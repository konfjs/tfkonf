import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVertexAiFeatureOnlineStoreArgsbigtableAutoScaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsbigtable {
  auto_scaling: GoogleVertexAiFeatureOnlineStoreArgsbigtableAutoScaling;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}
export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint {
  private_service_connect_config: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsoptimized {}
export interface GoogleVertexAiFeatureOnlineStoreArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeatureOnlineStoreArgs {
  force_destroy?: boolean;
  labels?: {
    [key: string]: string;
  };
  name: string;
  bigtable: GoogleVertexAiFeatureOnlineStoreArgsbigtable;
  dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint;
  optimized: GoogleVertexAiFeatureOnlineStoreArgsoptimized;
  timeouts: GoogleVertexAiFeatureOnlineStoreArgstimeouts;
}
export class google_vertex_ai_feature_online_store extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureOnlineStoreArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_feature_online_store");
  }
}