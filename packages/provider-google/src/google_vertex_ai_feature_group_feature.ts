import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureGroupFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureGroupFeatureArgs {
  description?: string;
  feature_group: string;
  labels?: { [key: string]: string };
  name: string;
  region: string;
  timeouts?: GoogleVertexAiFeatureGroupFeatureArgsTimeouts;
}

export class google_vertex_ai_feature_group_feature extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;
  readonly version_column_name?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureGroupFeatureArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_feature_group_feature");
  }
}
