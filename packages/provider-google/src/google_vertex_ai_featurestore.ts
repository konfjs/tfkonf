import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionSpec {
  kms_key_name: string;
}
export interface Scaling {
  max_node_count: number;
  min_node_count: number;
}
export interface OnlineServingConfig {
  fixed_node_count?: number;
  scaling: Scaling;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeaturestoreArgs {
  force_destroy?: boolean;
  labels?: {
    [key: string]: string;
  };
  name?: string;
  encryption_spec: EncryptionSpec;
  online_serving_config: OnlineServingConfig;
  timeouts: Timeouts;
}
export class google_vertex_ai_featurestore extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeaturestoreArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_featurestore");
  }
}