import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiFeatureOnlineStoreArgsBigtableAutoScaling {
  max_node_count: number;
  min_node_count: number;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsBigtable {
  auto_scaling: GoogleVertexAiFeatureOnlineStoreArgsBigtableAutoScaling;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}
export interface GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint {
  private_service_connect_config: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpointPrivateServiceConnectConfig;
}
export interface GoogleVertexAiFeatureOnlineStoreArgsOptimized {}
export interface GoogleVertexAiFeatureOnlineStoreArgsTimeouts {
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
  bigtable: GoogleVertexAiFeatureOnlineStoreArgsBigtable;
  dedicated_serving_endpoint: GoogleVertexAiFeatureOnlineStoreArgsDedicatedServingEndpoint;
  optimized: GoogleVertexAiFeatureOnlineStoreArgsOptimized;
  timeouts?: GoogleVertexAiFeatureOnlineStoreArgsTimeouts;
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