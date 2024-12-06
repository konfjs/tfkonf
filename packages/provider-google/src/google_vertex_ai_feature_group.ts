import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeatureGroupArgsBigQueryBigQuerySource {
  input_uri: string;
}

export interface GoogleVertexAiFeatureGroupArgsBigQuery {
  entity_id_columns?: string[];
  big_query_source: GoogleVertexAiFeatureGroupArgsBigQueryBigQuerySource;
}

export interface GoogleVertexAiFeatureGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeatureGroupArgs {
  description?: string;
  labels?: { [key: string]: string };
  name?: string;
  region?: string;
  big_query: GoogleVertexAiFeatureGroupArgsBigQuery;
  timeouts?: GoogleVertexAiFeatureGroupArgsTimeouts;
}

export class google_vertex_ai_feature_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureGroupArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_feature_group");
  }
}
