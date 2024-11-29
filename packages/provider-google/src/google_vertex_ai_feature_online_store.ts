import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoScaling {
  max_node_count: number;
  min_node_count: number;
}
export interface Bigtable {
  auto_scaling: AutoScaling;
}
export interface PrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}
export interface DedicatedServingEndpoint {
  private_service_connect_config: PrivateServiceConnectConfig;
}
export interface Optimized {}
export interface Timeouts {
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
  bigtable: Bigtable;
  dedicated_serving_endpoint: DedicatedServingEndpoint;
  optimized: Optimized;
  timeouts: Timeouts;
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